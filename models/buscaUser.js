const User = require('../models/User');

function buscaUsuarioViaEmail(email){
    const usuario = User.find(function (item){
        return item.email == email
    }) 
    return usuario
}