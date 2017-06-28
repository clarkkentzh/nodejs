var fs = require("fs");
var util = require("util");
var kMaxLength = require('smalloc').kMaxLength;

function myerr() {
  if (DEBUG) {
    var backtrace = new Error;
    return function(err) {
      if (err) {
        backtrace.stack = err.name + ': ' + err.message +
                          backtrace.stack.substr(backtrace.name.length);
        err = backtrace;
        throw err;
      }
    };
  }
  return function(err){
    if(err) {
      console.log(err);
    }
  };
}

function maycallback(cb){
  return util.ifFunction(cb) ? cb : myerr();
}

function assencoding(encoding){
  if(encoding && !Buffer.isEncoding(encoding)){
    throw new Error('Unknown encoding: ' + encoding);
  }
}
var myread = function(path,en,callback_){

  var callback = maycallback(arguments[arguments.length - 1]);

  if(util.isFunction(en) || !en){
    en = {
      encoding:null,
      flag:"r"
    }
  }else if(util.isString(en)){
    en = {
      encoding:en,
      flag:"r"
    }
  }else if(util.isObject(en)){
    throw new TypeError("error arguments");
  }

  var encoding = en.encoding;
  assencoding(encoding);

  var size;
  var buffer;
  var buffers;
  var fd;
  var pos = 0;

  var flag = en.flag || "r";
  fs.open(path,flag, 438,function(err,fd_){
    fd = fd_;
    if(err) {
      callback(err);
    }
    fs.stat(fd,function(err,st){
      if(err) {
        fs.close(fd,function(){
          callback(err);
        })
      }
      size = st.size;
      if(size === 0) {
        buffers = [];
        return read();
      }
      if (size > kMaxLength) {
       var err = new RangeError('File size is greater than possible Buffer: ' +
           '0x3FFFFFFF bytes');
       return fs.close(fd, function() {
         callback(err);
       });
      }
      buffer = new Buffer();
      read();
    });
  });
  function read() {
    if (size === 0) {
      buffer = new Buffer(8192);
      fs.read(fd, buffer, 0, 8192, -1, afterRead);
    } else {
      fs.read(fd, buffer, pos, size - pos, -1, afterRead);
    }
  }

  function afterRead(er, bytesRead) {
    if (er) {
      return fs.close(fd, function() {
        return callback(er);
      });
    }

    if (bytesRead === 0) {
      return close();
    }

    pos += bytesRead;
    if (size !== 0) {
      if (pos === size) close();
      else read();
    } else {
      // unknown size, just read until we don't get bytes.
      buffers.push(buffer.slice(0, bytesRead));
      read();
    }
  }

  function close() {
    fs.close(fd, function(er) {
      if (size === 0) {
        // collected the data into the buffers list.
        buffer = Buffer.concat(buffers, pos);
      } else if (pos < size) {
        buffer = buffer.slice(0, pos);
      }

      if (encoding) buffer = buffer.toString(encoding);
      return callback(er, buffer);
    });
  }
}
