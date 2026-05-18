var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.get("/todos", function (req, res) {
    postController.mostrarTodos(req, res);
})

router.post("/novopost", function (req, res) {
    postController.novoPost(req, res);
});

module.exports = router;