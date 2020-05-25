/*Faça um algoritmo que receba uma entrada do usuário e caso encontre a letra a
transforme ela em maiúscula
EX: abelha
O algoritmo imprime
AbelhA*/

var user = require("readline-sync");
var palavra = user.question("Digite uma palavra: ");
var separar = palavra.split('');
var tamanho = separar.length;

for (var i = 0; tamanho >= i; i++) {
    if (separar[i] == "a") {
        separar[i] = separar[i].toUpperCase();
    }
}

separar = separar.join('');
console.log(separar);