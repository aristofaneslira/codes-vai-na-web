let numero = [1, 2, 3, 4];
console.log(numero);

let salada = {
    ingredientes: ["tomate", "batada", "alface"],
    tempero: "vinagre"
};
console.log(salada);

let playYoutube = [
    {
        nome: "josé",
        idade: 70,
        gostoMusical: ["blues", "jazz", "hip-hop"]
    },
    {
        nome: "manoela",
        idade: 32,
        gostoMusical: ["k-pop", "jazz", "hip-hop"]
    }

];

console.log(`${playYoutube[1].nome} gosta de ${playYoutube[1].gostoMusical[0]}`);

playYoutube.push({
    nome: "Tatiana",
    idade: 47,
    gostoMusical: ["gospel", "sertanejo", "rock"]
});

console.log(playYoutube);

for(let n = 0; n <= 10; n++){
    console.log(n);
}

for (let i = 10; i >= 0; i--) {
    console.log(i); 
}

for (let i = 2; i <= 12; i += 2) {
    console.log(i); 
}

for (let i = 10; i <= 100; i += 10) {
    console.log(i); 
}

function corFavorita(cor) {
    if (cor === "azul") {
        return "Voce gosta do céu!!";
    } else if(cor === "verde") {
        return "Voce gosta de mato!!";
    } else {
        return "Voce gosta de outra cor!!";
    }
}

console.log(corFavorita("branco"));