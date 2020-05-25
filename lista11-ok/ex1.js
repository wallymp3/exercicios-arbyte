/*Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a
média no final.
Utilize o pacote : https://www.npmjs.com/package/median*/

var rs = require('readline-sync');
var median = require('median');

notas = [];

console.log('Digite as notas:');
for (var i = 0; i < 4; i++) {
    notas[i] = rs.questionInt('> ')
}

var media = median(notas);
console.log('A média é: ' + media);