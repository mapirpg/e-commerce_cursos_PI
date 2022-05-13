const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router()

router.get('/', (req, res,) => {
  if(!req.session.estaLogado){
    res.redirect('/login');
    return
  }
    res.render('paginaCursos');
  });

  
module.exports = router;