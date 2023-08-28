let lista = ["caneta", "marcador", "caderno"];
console.log(lista);
console.log(lista.includes("caderno"));
console.log(lista.indexOf("caderno"));

let listaCompras = {caneta: "azul", marcador: "colorido"};

console.log(listaCompras);

let funcionario = {nome: "João", salario: 3000, funcao: "gerente", matricula: 13455};
delete funcionario.matricula;
console.log(funcionario);

let cadastro = [
    {
        nome: "Kleber",
        idade: 22,
        profissao:"facilitador frontend"
    },
    {
        nome: "Grazy",
        idade: 40,
        profissao:"facilitadora frontend"
    },
    {
        nome: "Carol",
        idade: 29,
        profissao:"instrutora frontend"
    }

];

console.log(cadastro);
console.log(cadastro[2]);
console.log(cadastro[2].profissao);
console.log(`${cadastro[0].nome} gosta de jogar video game!!`);