var mongoose = require('mongoose');
var url = 'mongodb://clark:195056@ds151752.mlab.com:51752/clark';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', function(){
    console.log("Connect error");
});

db.once('open', function(){
    console.log("mongoose working!!!");
});

// Schema: 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力
// Model: 由Schema发布生成的模型，具有抽象属性和行为的数据库操作对
// Entity: 由Model创建的实体，他的操作也会影响数据库

//定义一个Schema,设置文件存储格式
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    age: Number,
    DOB: Date,
    isAlive: Boolean
});

//将该userSchema发布为model
var User = mongoose.model('pay', userSchema);
//用model创建Entity.
var arvind = new User({
    name : 'Clark',
    age: 24,
    DOB: '04/10/1994',
    isAlive: false
});
//用Model查询数据
User.findOne({"age":24}, function(err, data){
    console.log(data);
    console.log(data.name);
});


//使用Entity, 存储数据库.
arvind.save(function(err, data){
  console.log(data);
});
