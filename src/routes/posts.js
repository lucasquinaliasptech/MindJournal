var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.get("/todos", function (req, res) {
    postController.mostrarTodos(req, res);
})

router.post("/novopost", function (req, res) {
    postController.novoPost(req, res);
});

router.post("/meusposts", function (req, res) {
    postController.meusPosts(req, res);
})

router.post("/meuspostspordia", function (req, res) {
    postController.meusPostsPorDia(req, res);
})

router.post("/visibilidademeusposts", function (req, res) {
    postController.visibilidadeMeusPosts(req, res);
})

router.post("/statusmeusposts", function (req, res) {
    postController.statusMeusPosts(req, res);
})

module.exports = router;