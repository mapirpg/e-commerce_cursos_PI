const express = require('express');

const router = express.Router()

router.get('/', (req, res,) => {
  if(!req.session.estaLogado){
    res.redirect('/login');
    return
  }
    res.render('paginaCarrinho');
  });
  
  module.exports = router;