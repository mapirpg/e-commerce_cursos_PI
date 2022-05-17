const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const path = require('path');
const loginControler = require('../controllers/loginControler');

router.use(bodyParser.urlencoded({extended:true}));
router.post('/', loginControler.store);
router.get('/', (req, res,) => {
   req.session.paginaLoginAtivo = true;
    res.locals.paginaLoginAtivo = req.session.paginaLoginAtivo;
    res.render('paginaLogin');
  });

  

  module.exports = router;