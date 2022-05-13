const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


module.exports = {
    async store(req, res) {
        const { senha } = req.body;
        const { email } = req.body;


        let getUser = await User.findOne({ where: { email: email, senha: senha } }) 
        if (getUser?.email && getUser?.senha) {
            console.log("Conta excluida");
            User.destroy({ where: { email: email } })
            res.redirect('/');

        } else {
            console.log("Nome ou Email errado");
            res.render('error', { mensagemErro: 'Email ou Senha incorretos!', voltarLink: '/login' })

        }

    }


}