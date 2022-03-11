const express = require('express');
const router = express.Router();


router.get('/', (req, res,) => {
  res.render('admin');
});

router.get('/cadastrar_aluno', (req, res,) => {
    res.render('adminCadastrarAluno');
  });
  
  // router.get('/cadastrar_professor', (req, res,) => {
  //   res.render('adminCadastrarProfessor');
  // });

  module.exports = router;