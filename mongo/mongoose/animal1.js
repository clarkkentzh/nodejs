var mongoose = require('mongoose');
var url = "mongodb://clark:195056@ds151752.mlab.com:51752/clark";
mongoose.connect(url);

var db = mongoose.connection;
db.on("error",function(){
  console.log("connect error");
});
db.once("open",function(){
  console.log("connect success");
});

var Schema = mongoose.Schema;
var animalSchema = new Schema({name:String,type:String});

animalSchema.statics.findByName = function(name,cb){
  return this.find({ name: new RegExp(name, 'i') }, cb);
};

//静态方法(statics)，用模型查询
var animal = mongoose.model("animal",animalSchema);
animal.findByName("zhaohong",function(err,animals){
  console.log(animals);
})
