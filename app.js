const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const Sequelize = require('sequelize');
const dbConfig = require('./config/database');
const connection = new Sequelize(dbConfig);

const app = express();







// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ---------------- Rotas principais -------------------- //

app.use('/', require('./router/index'));
app.use('/cadastro', require('./router/cadastroRoute'));
app.use('/carrinho', require('./router/carrinhoRoute'));
app.use('/certificados', require('./router/certificadosRoute'));
app.use('/cursos', require('./router/cursosRoute'));
app.use('/login', require('./router/loginRoute'));
app.use('/cadastro', require('./router/cadastroRoute'));
app.use('/nova_senha', require('./router/resetPasswordRoute'));

// mongo enviando dados
app.post("/artigo", (req, res) => {
  return res.json({titulo: "teste"});
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
