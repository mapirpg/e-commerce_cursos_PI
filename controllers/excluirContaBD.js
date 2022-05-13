const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


module.exports = {
    async store(req, res) {
        let buscaUser = await User.findOne({ where: { email: email } })



    }


}