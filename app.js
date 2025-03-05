//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

 
function adicionarAmigo() {
    let amigoAdicionado = document.getElementById('amigo');
    let nomeAmigo = amigoAdicionado.value.trim();

    
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nomeAmigo);

    amigoAdicionado.focus();

    amigoAdicionado.value = "";

    atualizarLista();

    console.log("Lista de amigos:", amigos);

}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    
    listaAmigos.innerHTML = "";

    for (let i=0; i < amigos.length; i++)
    {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
    
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Nenhum amigo adicionado.');
        return;
    }
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let amigoSorteado =amigos[Math.floor(Math.random() * amigos.length)];

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
    
    limparLista();

    }


function limparLista() {
    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos = [];

    setTimeout(() => {
        resultado.innerHTML = '';
    }, 4000);
   
}