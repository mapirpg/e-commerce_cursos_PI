const express = require('express');
const router = express.Router();


router.get('/', (req, res,) => {
  res.render('admin');
});

router.get('/alterar_email', (req, res,) => {
    res.render('adminAlterarEmail');
  });

  
router.get('/alterar_senha', (req, res,) => {
    res.render('adminAlterarSenha');
  });

router.get('/excluirConta', (req, res,) => {
    res.render('excluirConta');
});

router.get('/cadastrar_postagem', (req, res,) => {
  res.render('adminCadastrarPostagem');
});

module.exports = router;