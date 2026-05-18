var database = require("../database/config")

function mostrarTodos() {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mostrarTodos():")
    var instrucaoSql = `SELECT * FROM postagem WHERE visibilidade = 1 AND status_postagem = 1;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function novoPost(titulo, conteudo, id_autor, visibilidade) {
    console.log("ACESSEI O POST MODEL \n \n function novoPost():", titulo, conteudo, id_autor, visibilidade);
    var instrucaoSql = `INSERT INTO postagem (titulo, conteudo, id_autor, visibilidade) VALUES ('${titulo}', '${conteudo}', '${id_autor}', '${visibilidade}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarTodos,
    novoPost
};