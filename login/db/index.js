const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/zhao';

mongoose.connect(url);

let db = mongoose.connection;

db.once('open', function(){
  console.log('connect db ok!');
})

let Schema = mongoose.Schema;

let userShema = Schema({
  name: {type: String},
  password: {type: String}
});


module.exports.user = mongoose.model('login', userShema);
