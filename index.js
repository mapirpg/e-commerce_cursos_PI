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
app.set('view engine', 'ejs', 'html');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req,res)=>{
    res.render('paginaInicial',{
        pageTitle: 'Venda de Cursos',
        

        
    });

app.get('/login', (req,res)=>{
    res.render('paginaLogin');
})

app.get('/certificados', (req,res) =>{
    res.render('paginaCertificados')
})

app.get('/cadastro', (req,res) =>{
    res.render('paginaCadastro')
})
app.get('/reset', (req , res)=>{
    res.render('paginaResetPassword')
})

app.get('/cursos', (req,res) =>{
    res.render('paginaCursos')
})
app.get('/cursoInd', (req,res) =>{
    res.render('paginaCursosInd')
})

});
const servidorIniciado = ()=>{
console.log("OK");
}
app.listen(4000, servidorIniciado);

