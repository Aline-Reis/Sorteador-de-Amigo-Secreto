/**
 * @description Código JavaScript gerencia uma lista de amigos e realiza um sorteio de nomes aleatórios}
 * @author Aline Reis
 * @date 02/02/2025
 */

let amigos = []; //  variável do tipo array, que armazenará os nomes dos amigos inseridos.

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value.trim(); // Obtendo o valor do input e removendo espaços extras

    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nome); // Adicionando o nome ao array
    document.getElementById('amigo').value = '';
    atualizarLista();
}

function atualizarLista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpando a lista antes de adicionar os itens

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
// função para sortear um nome aleatório
function sortearAmigo(){
    if (amigos.length===0){
        document.getElementById('resultado').innerHTML = 'Nenhum nome disponível para sorteio.';
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML= `Amigo sorteado: ${amigoSorteado}`;
}