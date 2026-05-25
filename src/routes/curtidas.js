var express = require("express");
var router = express.Router();

var curtidaController = require("../controllers/curtidaController");

router.post("/curtirpost", function (req, res) {
    curtidaController.curtirPost(req, res);
});

router.post("/buscarcurtidapost", function (req, res) {
    curtidaController.buscarCurtidaPorPost(req, res);
});

module.exports = router;