const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

module.exports ={
    
    async store(req, res){

        const {email} = req.body;
        let getEmail = await User.findOne({ where: { email: email} }) // Vá no banco de dados e busque o usuário que tem o email igual ao que foi passado no body
        if (getEmail?.email) {
            console.log("Logado");    
     }else{
            console.log("Nome ou Email errado");    
     }
        res.render('paginaLogin');
    }
}