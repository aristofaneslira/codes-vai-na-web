function aviso() {
    console.log("bom dia!!");
}

aviso();

const info = function (nome, idade, cidade) {
    // console.log(nome);
    // console.log(idade);
    // console.log(cidade);
    console.log(nome, idade, cidade);
}

info("Ari", "32 anos", "Campina Grande");

let nome = "Maria";

function mostrarNome(meuNome) {
    console.log(`Meu nome é ${meuNome}`);
}

mostrarNome(nome);

function soma(n1, n2) {
    return n1+ n2;
}

console.log(soma(5,5));

function vitamina(fruta1, fruta2) {
    return fruta1 + fruta2;
}

const copo = vitamina("banana", " + mamao");
console.log(copo);