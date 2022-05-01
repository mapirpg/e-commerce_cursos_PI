const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

module.exports = {
    async store(req, res ){
        const {email} = req.body;
        const {senha} = req.body;
        let getUser = await User.findOne({ where: { email: email} }) // Vá no banco de dados e busque o usuário que tem o email igual ao que foi passado no body
        console.log(getUser?.email)
        
        if (getUser?.email) { // Se getUser.Email for verdadeiro, ele vai entrar no if
            console.log("### conta existente") 
            res.render('error', { mensagemErro: 'Conta Existente', voltarLink: '/cadastro' })
            
        }else { // Se getUser.Email for falso, ou se vir vazio(null) ou undefined, ele vai entrar no else
            User.create({ email, senha });
         }


      res.render('paginaCadastro')
        // await User.create({ name2, email2 });
        // res.render('paginaCadastro');
    
    }
}
