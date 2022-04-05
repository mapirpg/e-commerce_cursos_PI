const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));
router.get('/', (req, res,) => {
    res.render('paginaLogin',);
  });
  

  module.exports = router;