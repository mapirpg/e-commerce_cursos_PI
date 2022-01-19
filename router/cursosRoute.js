const express = require('express');
const cursos = require('../database/cursos')

const router = express.Router()

router.get('/', (req, res,) => {
    res.render('paginaCursos', {cursos});
  });
  
module.exports = router;