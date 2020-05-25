/*Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é
maiúscula ou não*/

var user = require('readline-sync');
var character = user.question("Digite uma frase: ");
if (character == character.toLowerCase()) {
    console.log("Primeira letra nao e maiscula");
} else {
    console.log("Primeira letra e maiscula");
}