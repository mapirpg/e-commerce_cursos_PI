const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

module.exports ={
    
    async store(req, res){
        const {senha} = req.body;
        const {email} = req.body;
        let getUser = await User.findOne({ where: { email: email, senha: senha} }) // Vá no banco de dados e busque o usuário que tem o email igual e senha ao que foi passado no body
        if (getUser?.email && getUser?.senha) {
            console.log("Logado"); 
            res.render('/');   
     }else{
            console.log("Nome ou Email errado");    
     }
     res.render('error', { mensagemErro: 'Email ou Senha incorretos!', voltarLink: '/login' })

    }
}