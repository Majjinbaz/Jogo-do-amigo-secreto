let listaAmigos = [];

function adicionarAmigo() {
    let campo = document.getElementById('amigo').value.trim(); // Remove espaços extras
    
    if (campo === "") {
        alert('Digite um nome válido!');
        return;
    }
    
    listaAmigos.push(campo);
    atualizarLista();
    limparCampo();
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; 
    
    listaAmigos.forEach((nome, index) => {
        let li = document.createElement('li');
        li.textContent = nome;

        let btnRemover = document.createElement('button');
        btnRemover.textContent = '❌';
        btnRemover.onclick = function () {
            removerAmigo(index);
        };

        li.appendChild(btnRemover);
        listaHTML.appendChild(li);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    document.getElementById('resultado').textContent = `🎉 O Amigo Secreto é: ${amigoSorteado}! 🎁`;
}
