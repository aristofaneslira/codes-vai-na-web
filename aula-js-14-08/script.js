let maiorDeIdade = true;

if (maiorDeIdade) {
    console.log("Você é maior de idade!!")
} else {
    console.log("Você ainda é menor de idade!!");
}

let idade = 18;

if (idade >=  18) {
    console.log("Você é maior de idade!!")
} else {
    console.log("Você ainda é menor de idade!!");
}

// if (idade >=  18) {
//     console.log("Você é maior de idade!!")
// } else if(idade > 18) {
//     console.log("Você ainda é menor de idade!!");
// }

let saldoBacario = 300;

if (saldoBacario >= 50) {
    console.log("Vou comer uma pizza!");
} else if(saldoBacario >= 20){
    console.log("Vou na praça comer um lanche!");
} else if(saldoBacario < 20){
    console.log("Não vou sair de casa, estou com pouco dinheiro");
}

let userName = "@ari";
let password = "1234";

if (userName === "@ari" && password === "1234") {
    console.log("Login efetuado com sucesso!!");
} else {
    console.log("Senha incorreta!!! Digite novamente..");
}