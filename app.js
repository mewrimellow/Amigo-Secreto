//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Seleciona os elementos do DOM
let amigoAdicionado = document.getElementById("amigo"); // Campo de input
let listaAmigos = document.getElementById("listaAmigos"); // Lista de amigos (ul)
let resultado = document.getElementById("resultado"); // Resultado do sorteio (p)

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o valor do input e remove espaços em branco no início e no final
    let nomeAmigo = amigoAdicionado.value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return; // Sai da função se o campo estiver vazio
    }

    // Verifica se o nome já foi adicionado à lista
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        return; // Sai da função se o nome já existir
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de input após adicionar o nome
    amigoAdicionado.value = "";

    // Atualiza a lista de amigos na página
    atualizarListaAmigos();

    // Exibe a lista de amigos no console para depuração
    console.log("Lista de amigos:", amigos);

}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    // Limpa a lista atual
    listaAmigos.innerHTML = "";

    // Adiciona cada amigo da lista ao HTML
    amigos.forEach((amigo) => {
        let itemLista = document.createElement("li"); // Cria um novo elemento <li>
        itemLista.textContent = amigo; // Define o texto do <li>
        listaAmigos.appendChild(itemLista); // Adiciona o <li> à lista
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
    
    limparLista();
    }

// Função para limpar a lista
function limparLista() {
    amigos = [];
    atualizarListaAmigos();

    setTimeout(() => {
        resultado.innerHTML = ''; // Limpa o resultado do sorteio
    }, 3000);
   
}