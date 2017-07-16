var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();
var db = require('../db');
var salt = 10;

router.get('/', (req, res, next) => {
  res.render('login', {title: 'Login'});
});

router.post('/', (req, res, next) => {
  console.log(req.body);

  db.user.findOne({
    name: req.body.username
  }, function(err, data) {
    console.log(data);
    if(data){
      bcrypt.compare(req.body.password, data.password, function(err, hash) {
  //bcrypt.compare将输入的密码转成hash值并与数据库的密码hash值比较，结果返回hash
  　　　　console.log(hash);
  //hash是数据库的集合
        if (hash) {
          req.session.name = data.name;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      });
    }
  });
});

module.exports = router;
