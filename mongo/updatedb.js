var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/zhao";

var updatedb = function(db,callback){
  var three = db.collection("three");

  var query = {"name":"zz"};
  var update = {$set:{"score":32}};

  three.update(query,update,function(err,result){
    if(err) {
      console.log(err);
    }else {
      callback(result);
    }
  })
}

mongo.connect(url,function(err,db){
  if(err) {
    console.log(err);
  }else {
    console.log("connect server success!");
    updatedb(db,function(result){
      console.log(result);
      db.close();
    })
  }
})
