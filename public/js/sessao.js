// sessão
function validarSessao() {
    var id = sessionStorage.ID_USUARIO;
    var pessoa = document.getElementById("icone-pessoa");
    var dashboard = document.getElementById("icone-dashboard");

    id != null ? (pessoa.href = "perfil.html", dashboard.href = "dashboard.html") : (pessoa.href = "cadastro.html", dashboard.href = "cadastro.html");
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}