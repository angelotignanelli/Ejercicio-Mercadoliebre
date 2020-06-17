// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const userLogs = require('../middlewares/userLogs');
const ingresoMiddleware = require('../middlewares/ingreso');

/* GET - home page. */
router.get('/', userLogs, mainController.root);

router.get("/userlog", userLogs, mainController.log);

router.get("/admin", ingresoMiddleware, mainController.ingreso);

module.exports = router;
