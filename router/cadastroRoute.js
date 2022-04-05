const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const cadastroRoute = require('../controllers/cadastroControler');


router.use(bodyParser.urlencoded({extended:true}));

router.post('/', cadastroRoute.store);

router.get('/', (req, res) =>{
  res.render('paginaCadastro');
});
  
  module.exports = router;