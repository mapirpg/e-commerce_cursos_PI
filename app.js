const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const routes = require('./routes');
const app = express();const session = require('express-session');

app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: true
}))
require('./database');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
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
app.use('/nova_senha', require('./router/resetPasswordRoute'));
app.use('/admin', require('./router/adminRoute'));
app.use(routes);
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
  res.render('');
});



module.exports = app;
