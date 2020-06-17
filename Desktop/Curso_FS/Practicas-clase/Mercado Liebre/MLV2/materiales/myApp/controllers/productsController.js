const fs=require("fs")
const path = require("path")

const productsFilePath = path.join(__dirname,"../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "UTF-8"));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
    detail: function(req, res, next) {
        let producto = products.find(function(element){
            return element.id == req.params.id
        });
        console.log(producto);
        let title = "Mercado Liebre / " + producto.name;
        res.render("detail", {
            title: title,
            aMiles: toThousand,
            producto: producto,
        });
    }
}

module.exports = controller;