var database = require("../database/config")

function curtirPost(id_postagem, id_usuario) {
    console.log("ACESSEI O CURTIDA MODEL \n \n function curtirPost():", id_postagem, id_usuario);
    var instrucaoSql = `INSERT INTO curtida (id_postagem, id_usuario) VALUES (${id_postagem}, ${id_usuario});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarCurtidaPorPost(id_postagem, id_usuario) {
    console.log("ACESSEI O CURTIDA MODEL \n \n function buscarCurtidaPorPostUsuario():", id_postagem, id_usuario);
    var instrucaoSql = `SELECT IFNULL(MAX(1), 0) AS status FROM curtida WHERE id_postagem = ${id_postagem} AND id_usuario = ${id_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function descurtirPost(id_postagem, id_usuario) {
    console.log("ACESSEI O CURTIDA MODEL \n \n function descurtirPost():", id_postagem, id_usuario);
    var instrucaoSql = `DELETE FROM curtida WHERE id_postagem = ${id_postagem} AND id_usuario = ${id_usuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    curtirPost,
    buscarCurtidaPorPost,
    descurtirPost
};