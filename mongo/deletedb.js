var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/zhao";

var deletedb = function(db,callback){
  var three = db.collection("three");

  var data = {"two":2};
  three.remove(data,function(err,result){
    if(err) {
      console.log(err);
    }else {
      callback(result);
    }
  });
};

mongo.connect(url,function(err,db){
  if(err) {
    console.log(err);
  }else {
    console.log("connect server success!");
    deletedb(db,function(result){
      console.log(result);
      db.close();
    })
  }
})
