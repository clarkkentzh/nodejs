var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/zhao";

var findone = function(db,callback){
  var three = db.collection("three");
  var data = {"name":"dd"};

  three.find(data).toArray(function(err,result){
    if(err){
      console.log(err);
      return;
    }else {
      callback(result);
    }
  });
}

mongo.connect(url,function(err,db){
  if(err){
    console.log(err);
  }else {
    console.log("connect server seccess!");
    findone(db,function(result){
      console.log(result);
      db.close();
    })
  }
})
