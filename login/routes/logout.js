var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.name = null;
  res.redirect('/');
});

module.exports = router;
