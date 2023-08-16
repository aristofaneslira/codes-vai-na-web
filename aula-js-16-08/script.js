let diaEnsolarado = false;
console.log(typeof diaEnsolarado);

if (diaEnsolarado) {
    console.log("vamos para piscina!!");
} else {
    console.log("estudar Javascript!!");
}

let usuario = "@aristofanes";
let senha = 1234;

if (usuario == "@aristofanes" && senha === 1234) {
    console.log("LOGADO!!");
} else {
    console.log("Senha incorreta!!tente novamente!!");
}

let numeroDaSorte = 1;

if (numeroDaSorte === 7) {
    console.log("Parabéns você acertou!");
} else if (numeroDaSorte === 1) {
    console.log("errou! ta longe!");
} else if (numeroDaSorte === 2) {
    console.log("errou não é o numero 2!");    
} else {
    console.log("tente novamente, você esta quase lá!");
}

let temperatura = 38;

if (temperatura > 39) {
  console.log("Febre alta");
} else if (temperatura >= 37 || temperatura >= 38) {
  console.log("febre moderada");
} else {
  console.log("Sem febre");
}

console.log(1);
console.log(2);
console.log(3);

for (let index = 0; index <= 10; index++) {
    console.log(i);
}