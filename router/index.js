var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.get('/', function(req, res, next) {
  
  console.log("testando")
  res.render('index');
});
module.exports = router;
