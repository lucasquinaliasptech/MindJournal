// sessão
function validarSessao() {
    var id = sessionStorage.ID_USUARIO;
    var link = document.getElementById("icone-pessoa");

    id != null ? link.href = "perfil.html" : link.href = "cadastro.html";
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}