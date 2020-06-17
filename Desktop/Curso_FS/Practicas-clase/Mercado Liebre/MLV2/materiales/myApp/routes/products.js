var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController");

/* GET home page. */
//router.get('/', productsController.detail);

router.get("/detail/:id/:category", productsController.detail);

module.exports = router;