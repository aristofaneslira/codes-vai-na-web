// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let dia = "dia";
if (dia === "dia") {
    console.log("claro");
} else {
    console.log("de noite");
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (let index = 2; index <= 20; index += 2) {
    console.log(index);  
}

// 03 - crie uma função que exiba uma mensagem no console

function msg() {
    console.log("oi voce!!");
}

msg();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function exibeNome(nome) {
    console.log(nome);
}

exibeNome("Aristófanes");

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function exibePreferencias(nome, idade, estiloMusical) {
    console.log(nome, idade, estiloMusical);
}

exibePreferencias("Aristófanes", 32, "Pagode");

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function exibeFilmeMusica(filme, musica) {
    console.log(filme, musica);
}

exibeFilmeMusica("Velozes e Furiosos","A desconhecida");


// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function exibeTriplo(numero) {
    console.log(numero * 3);
}

exibeTriplo(3);

// 08 - crie uma função que  verifique se uma  variável é true ou false

function verifica(cond) { 
    console.log(cond); // não usei o bloco de if e else porque assim já atende a condição imposta na questão
}

var cond = true;
verifica(cond);


// 09 - Crie um array que receba 5 itens e exiba no console.

let array = [1,2,3,4,5];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}


// 10 - Utilize um método para adicionar um nome ao inicio do array.

pesquisar


// 11 - Utilize um método para remover o último nome do array.

pesquisar


// 12 - Utilize um método para adicionar dois nomes ao fim do array.

pesquisar


// 13 - Utilize um método para remover o primeiro nome do array.

pesquisar

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]
pesquisar sort


// 15 - Crie um objeto que receba ao menos três propriedades sobre você.


// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.


// 17 - Remova uma propriedade desse objeto.


// 18 - Mostre no console todas as propriedades desse objeto.


// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.


// 20 - Mostre no console o nome de um amigo de cada lista.