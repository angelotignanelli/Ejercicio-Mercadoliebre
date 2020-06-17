const fs = require("fs");

function userLogs(req, res, next){
    fs.appendFileSync("./src/data/logs/userLogs.txt", "El usuario ingreso a la ruta " + req.url + " ");

    next();
}

module.exports = userLogs;