var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var findb = function(db,callback){
  var three = db.collection("three").find();
  three.each(function(err,doc){
    if(err){
      console.log(err);
    }
    if(doc){
      callback(doc);
    }
  });
};


//自己的IP及数据库端口号,以及自己的数据库
var url = 'mongodb://localhost:27017/zhao';
MongoClient.connect(url, function(err, db) {
  if(err){
    console.log(err);
  }else {
    console.log('Connected server seccess！');
    findb(db,function(doc){
      console.log(doc);
      db.close();
    });
  }
});
