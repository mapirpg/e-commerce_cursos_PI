const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

module.exports = {
    async store(req, res ){
        const {name} = req.body;
        const {email} = req.body;
        await User.create({ name, email });
        res.render('paginaCadastro');
    }
}
