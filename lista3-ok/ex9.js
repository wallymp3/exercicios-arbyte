/*Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB*/

var user = require('readline-sync');
var texto = user.question("Digite uma palavra: ");
console.log((texto.split('').reverse().join('')));