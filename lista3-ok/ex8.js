/*Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em
uma linha. EX: usuário informou MAÇÃ
O algoritmo imprime:
M
A
Ç
Ã*/

var user = require('readline-sync');
var fruta = user.question("Digite uma fruta: ");
var fLength = fruta.length;
var count = 0;
var count2 = 1;
var letra;
while (count < fLength) {
    var letra = fruta.slice(count, count2);
    ++count;
    ++count2;
    console.log(letra);
}