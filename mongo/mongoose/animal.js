var mongoose = require("mongoose");
var url = "mongodb://clark:195056@ds151752.mlab.com:51752/clark";
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', function(){
    console.log("Connect error");
});

db.once('open', function(){
    console.log("mongoose working!!!");
});

var Schema = mongoose.Schema;
// define a schema
var animalSchema = new Schema({ name: String, type: String });

// assign a function to the "methods" object of our animalSchema
animalSchema.methods.findSimilarTypes = function(cb) {
  console.log(this.type);
  console.log("name = " + this.name);
  return this.model('Animal').find({ type: this.type }, cb);
};

var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({name:"zhaohong", type: 'dog' });

dog.save(function(){
  dog.findSimilarTypes(function(err, dogs) {
    console.log(dogs); // woof
  });
})
