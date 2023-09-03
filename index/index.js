var usuario = {
    "nome": "João",
    "idade": 30,
    "email": "joao@example.com"
};

function preencherDadosUsuario() {
    document.getElementById("nome").textContent = usuario.nome;
    document.getElementById("idade").textContent = usuario.idade;
    document.getElementById("email").textContent = usuario.email;
}

preencherDadosUsuario();
