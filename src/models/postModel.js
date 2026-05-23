var database = require("../database/config")

function mostrarTodos() {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mostrarTodos():")
    var instrucaoSql = `SELECT p.id_postagem, p.titulo, p.conteudo, DATE_FORMAT(p.data_postagem, "%e/%m/%Y") AS data_postagem, a.nome AS autor, a.apelido FROM postagem p JOIN usuario a ON a.id_usuario = p.id_autor WHERE visibilidade = 1 AND status_postagem = 1 ORDER BY p.data_postagem DESC`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function novoPost(titulo, conteudo, id_autor, visibilidade) {
    console.log("ACESSEI O POST MODEL \n \n function novoPost():", titulo, conteudo, id_autor, visibilidade);
    var instrucaoSql = `INSERT INTO postagem (titulo, conteudo, id_autor, visibilidade, data_postagem, status_postagem) VALUES ('${titulo}', '${conteudo}', '${id_autor}', '${visibilidade}', CURRENT_TIMESTAMP(), 1);`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function meusPosts(id_usuario) {
    console.log("ACESSEI O POST MODEL \n \n function meusPosts():", id_usuario);
    var instrucaoSql = `SELECT id_postagem, titulo, conteudo, DATE_FORMAT(data_criacao, "%e/%m/%Y") AS data, data_postagem, status_postagem, visibilidade, a.nome AS autor FROM postagem p JOIN usuario a ON a.id_usuario = p.id_autor WHERE id_autor = ${id_usuario} ORDER BY data_criacao DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function meusPostsPorDia(id_usuario) {
    console.log("ACESSEI O POST MODEL \n \n function meusPostsPorDia():", id_usuario);
    var instrucaoSql = `SELECT DATE_FORMAT(data_postagem, "%e/%m") AS data, COUNT(*) AS contagem FROM postagem WHERE DATE_FORMAT(data_postagem, "%e/%m") BETWEEN DATE_FORMAT(CURRENT_DATE(), "%e/%m") - 7 AND DATE_FORMAT(CURRENT_DATE(), "%e/%m") AND id_autor = ${id_usuario} GROUP BY DATE_FORMAT(data_postagem, "%e/%m") ORDER BY DATE_FORMAT(data_postagem, "%e/%m");`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function visibilidadeMeusPosts(id_usuario) {
    console.log("ACESSEI O POST MODEL \n \n function visibilidadeMeusPosts():", id_usuario);
    var instrucaoSql = `SELECT visibilidade AS cod, COUNT(*) AS contagem, CASE WHEN visibilidade = 1 THEN "Público" ELSE "Privado" END AS visibilidade FROM postagem WHERE id_autor = ${id_usuario} GROUP BY visibilidade;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function statusMeusPosts(id_usuario) {
    console.log("ACESSEI O POST MODEL \n \n function statusMeusPosts():", id_usuario);
    var instrucaoSql = `SELECT status_postagem AS cod, COUNT(*) AS contagem, CASE WHEN status_postagem = 1 THEN "Postado" ELSE "Rascunho" END AS status_postagem FROM postagem WHERE id_autor = ${id_usuario} GROUP BY status_postagem;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPostagemPorID(id_postagem) {
    console.log("ACESSEI O POST MODEL \n \n function buscarPostagemPorID():", id_postagem);
    var instrucaoSql = `SELECT id_postagem, titulo, conteudo, DATE_FORMAT(data_postagem, "%e/%m/%Y") AS data, a.nome AS autor, a.apelido FROM postagem p JOIN usuario a ON a.id_usuario = p.id_autor WHERE id_postagem = ${id_postagem};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarTodos,
    novoPost,
    meusPosts,
    meusPostsPorDia,
    visibilidadeMeusPosts,
    statusMeusPosts,
    buscarPostagemPorID
};