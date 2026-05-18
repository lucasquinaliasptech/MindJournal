var postModel = require("../models/postModel");

function mostrarTodos(req, res) {
    postModel.mostrarTodos()
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                if (resultado.length > 0) {
                    console.log(resultado);

                    var postsFormatados = resultado.map(item => {
                        return {
                            id: item.id_postagem,
                            titulo: item.titulo,
                            conteudo: item.conteudo,
                            data: item.data_postagem,
                            autor: item.autor,
                            apelido: item.apelido
                        };
                    });

                    res.json(postsFormatados);
                } else if (resultado.length == 0) {
                    res.status(403).send("Nenhum post cadastrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao recuperar todos os posts! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function novoPost(req, res) {
    var titulo = req.body.tituloServer;
    var conteudo = req.body.conteudoServer;
    var id_autor = req.body.idAutorServer;
    var visibilidade = req.body.visibilidadeServer;

    if (titulo == undefined) {
        res.status(400).send("O título do post está indefinido!");
    } else if (conteudo == undefined) {
        res.status(400).send("O conteúdo do post está indefinido!");
    } else if (id_autor == undefined) {
        res.status(400).send("O id do autor do post está indefinido!");
    } else if (visibilidade == undefined) {
        res.status(400).send("A visibilidade do post está indefinida!");
    } else {
        postModel.novoPost(titulo, conteudo, id_autor, visibilidade)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao adicionar novo post! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    mostrarTodos,
    novoPost
}