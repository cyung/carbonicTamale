var express = require('express');
var path = require('path');
var config = require('../config/config');
var apiRouter = require('./api.js');
var verify = require('./verify');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    res.redirect('/dashboard');
  }
  else {
    res.sendFile(path.join(config.public, 'index.html'));
  }
});

router.get('/dashboard', verify, function(req, res, next) {
  console.log("VERIFIED, GOING TO DASHBOARD");
  res.sendFile(path.join(config.public, 'instajam.html'));
});

router.get('/api', apiRouter);

module.exports = router;
