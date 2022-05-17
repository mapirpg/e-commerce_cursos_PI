const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        const {novoEmail} = req.body;

        
        let getUser = await User.findOne({ where: { email: email} })
        if (getUser.dataValues.email){
            await getUser.update({email: novoEmail})
                res.render('/');
        }else {

        }

    }

}
// const user = await User.findOne({where: { email: emailAntigo }});
// await user.update({ email: emailnovo })
// await user.save() 