//npm install
//npm install nodemon
//npm install body
//npm install express
//npm install init
//npm init
//npm install css
//npm install ejs

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res)=>{
    res.render('paginaInicial',{
        pageTitle: 'Venda de Cursos'
    });

app.get('/paginaDeLogin', (req,res)=>{
    res.render('paginaLogin');
})

});
const servidorIniciado = ()=>{
console.log("Tudo Certo Com O Servido!!!");
}
app.listen(4000, servidorIniciado);