const express = require('express');
const router = express.Router();


router.get('/', (req, res,) => {
  res.render('admin');
});

router.get('/cadastrar_aluno', (req, res,) => {
    res.render('adminCadastrarAluno');
  });

  
router.get('/cadastrar_professor', (req, res,) => {
    res.render('adminCadastrarProfessor');
  });

router.get('/cadastrar_curso', (req, res,) => {
    res.render('adminCadastrarCurso');
});

router.get('/cadastrar_postagem', (req, res,) => {
  res.render('adminCadastrarPostagem');
});

module.exports = router;