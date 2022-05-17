const express = require('express');
const router = express.Router()
const data = require('../database/cursos')

router.get('/', (req, res,) => {
  if(!req.session.estaLogado){
    res.redirect('/login');
    return
  }
    res.render('paginaCursos', {cursos: data});
  });

  
module.exports = router;