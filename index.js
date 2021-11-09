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

const index = express();
index.set('view engine', 'ejs');
index.set('views', './views');
index.use(bodyParser.urlencoded({ extended: false }));
index.use(express.static(path.join(__dirname, 'public')));


index.get('/', (req,res)=>{
    res.render('paginaInicial',{
        pageTitle: 'Venda de Cursos'
    });
index.get('/paginaDeLogin', (req,res)=>{
    res.render('paginaLogin');
})

});

index.listen(4000);