let numeros = [2,5,4,1,11];
console.log(numeros);
console.log(numeros[2], numeros[4]);

console.log(numeros.sort());

console.log(numeros.sort(function (a,b) { return a-b; }));

let objeto = { nome: "objeto", profissao: "robo", idade: "desconhecida", moradia: "computador"};
console.log(objeto);
console.log(objeto.idade);
console.log(objeto.nome);