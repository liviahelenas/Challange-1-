let amigos = ['Lívia', 'João', 'Isadora'];

function adicionarAmigo() {
    let nome = document.querySelector('.input-name').value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome:');
        return
    }
    amigos.push(nome);
    document.querySelector(".input-name").value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}


