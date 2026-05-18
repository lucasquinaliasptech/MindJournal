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

module.exports = router;