const fs = require("fs");

var usuariosHabilitados = ["Ada", "Greta", "Vim", "Tim"];

function ingreso(req, res, next){
    let usuarioURL = req.query.user;
    for(let i=0; i <= usuariosHabilitados.length; i++){
        if(usuariosHabilitados[i].includes(usuarioURL)){
            next();
        }
    }
    res.send("No tienes los privilegios para ingresar");
}


module.exports = ingreso;