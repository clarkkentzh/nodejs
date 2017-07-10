var mongoose = require("mongoose");
var url = 'mongodb://clark:195056@ds151752.mlab.com:51752/clark';
mongoose.connect(url);


var Schema = mongoose.Schema;
var schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array:      [],
  ofString:   [String],
  ofNumber:   [Number],
  ofDates:    [Date],
  ofBuffer:   [Buffer],
  ofBoolean:  [Boolean],
  ofMixed:    [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  }
});
// example use
var Info = mongoose.model('Info', schema);
var m = new Info;
m.name = 'Statue of Liberty'
m.age = 25;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1,2,3,4);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';

m.save(function(err, data){
  console.log('save ok.');
});
