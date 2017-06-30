var http = require("http");
var fs = require("fs");
var query = require("querystring");

var uname,pawd;
http.createServer(function(req,res){
  var str = '',str2 = '';
  var flag,flag2;
  if(req.url == '/') {
    fs.readFile("input.html","utf8",function(err,data){
      if(err){
        console.log(err);
      }else {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      }
    });
    req.on("data",function(datas){
      str2 += datas;
    });
    req.on("end",function(){
      flag2 = query.parse(str2);

      if(flag2.username1 && flag2.passwd1){
        uname = flag2.username1;
        pawd = flag2.passwd1;
      }
      if( flag2.username2 == uname){
          pawd = flag2.passwd2 ? flag2.passwd2 : pawd;
      }
      console.log(uname,pawd);
    });
  }else if(req.url == '/success') {
    req.on("data",function(user){
      str += user;
    });
    req.on("end",function(){
      flag = query.parse(str);
      res.writeHead(200,{"Content-Type":"text/html"});
      if(flag.username == uname && flag.passwd == pawd){
        res.end("<h1>login success</h1>");
      }else {
        res.end("<h1>username or password error,login failed!</h1>")
      }
    });
  }else if(req.url == '/pass') {
    fs.readFile("input2.html","utf8",function(err,data){
      if(err){
        console.log(err);
      }else {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      }
    });
  }else if(req.url == '/use'){
    fs.readFile("input1.html","utf8",function(err,data){
      if(err){
        console.log(err);
      }
      else {
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(data);
      }
    });
  }
}).listen(3000);
