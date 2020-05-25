/*Crie um programa que peça o usuário n números e, quando o usuário digitar -1, imprima
o maior e o menor, sem levar em consideração o -1*/

var rs = require('readline-sync');

var numeros = [];
var num = 0;

while (num != -1) {
    num = rs.questionInt('Digite um numero: ')
    numeros.push(num);
}

numeros.pop();
var maior = Math.max.apply(null, numeros);
var menor = Math.min.apply(null, numeros);

console.log(`O maior número é ${maior} e o menor número é ${menor}`);