var curtidaModel = require("../models/curtidaModel");

function curtirPost(req, res) {
    var id_postagem = req.body.idPost;
    var id_usuario = req.body.idUsuario;

    if (id_postagem == undefined) {
        res.status(400).send("O ID da postagem está indefinido!");
    } else if (id_usuario == undefined) {
        res.status(400).send("O ID do usuário está indefinido!");
    }

    curtidaModel.curtirPost(id_postagem, id_usuario)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                console.log(resultado);
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao recuperar o status dos posts do usuário! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarCurtidaPorPost(req, res) {
    var id_postagem = req.body.idPost;
    var id_usuario = req.body.idUsuario;

    if (id_postagem == undefined) {
        res.status(400).send("O ID da postagem está indefinido!");
    } else if (id_usuario == undefined) {
        res.status(400).send("O ID do usuário está indefinido!");
    }

    curtidaModel.buscarCurtidaPorPost(id_postagem, id_usuario)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                console.log(resultado);
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao recuperar o status dos posts do usuário! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    curtirPost,
    buscarCurtidaPorPost
}