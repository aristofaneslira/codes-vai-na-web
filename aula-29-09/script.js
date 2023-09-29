console.log("bom dia!!");

setTimeout(function () {
  console.log("ola eu sou o setTimeout");
}, 5000);

console.log("depois do setTimeout");

const teste = setInterval(function () {
  console.log("Eu sou o setInterval");
}, 1000);

setTimeout(function () {
  console.log("parando o setInterval!");
  clearInterval(teste);
}, 8000);
