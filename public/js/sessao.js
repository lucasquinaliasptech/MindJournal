// sessão
function validarSessao() {
    var id = sessionStorage.ID_USUARIO;
    var pessoa = document.getElementById("icone-pessoa");
    var dashboard = document.getElementById("icone-dashboard");
    var logout = document.getElementById("logout");

    id != null ? (pessoa.href = "perfil.html", dashboard.href = "dashboard.html", logout.style.display = "flex") : (pessoa.href = "cadastro.html", dashboard.href = "cadastro.html", logout.style.display = "none");
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}