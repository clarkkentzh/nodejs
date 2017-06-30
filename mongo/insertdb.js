var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/zhao";

var insertdb = function(db,callback){

  var three = db.collection("three");
  var datas = [{"one":1},{"two":2}];
  three.insert(datas,function(err,doc){
    if(err){
      console.log(err);
      return;
    }else {

      callback(doc);
    }
  })
};

mongo.connect(url,function(err,db){

  if(err){
    console.log(err);
  }else {
    console.log("connect server success!");
    insertdb(db,function(result){
      console.log(result);
      db.close();
    })
  }
});
