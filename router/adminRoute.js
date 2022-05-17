const express = require('express');
const excluirContaBD = require('../controllers/excluirContaBD');
const router = express.Router();
const modificaEmail = require('../controllers/modificaEmail');
router.use(function validarSession(req, res, next) {
  if (!req.session.estaLogado) {
    res.redirect('/login');
    return
  }
  next()
})

router.get('/', (req, res,) => {
  res.render('admin');
});

router.post('/alterar_email', modificaEmail.store);
router.get('/alterar_email', (req, res,) => {
  res.render('adminAlterarEmail');
});



router.get('/alterar_senha', (req, res,) => {
  res.render('adminAlterarSenha');
});

router.post('/excluirConta', excluirContaBD.store);
router.get('/excluirConta', (req, res,) => {
  res.render('excluirConta');
});


router.get('/cadastrar_postagem', (req, res,) => {
  res.render('adminCadastrarPostagem');
});

module.exports = router;