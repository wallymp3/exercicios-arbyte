/*Faça um algoritmo que receba um número e diga se ele é par ou ímpar
Utilize o pacote : https://www.npmjs.com/package/is-odd*/

var rs = require('readline-sync');
const isOdd = require('is-odd');

var num = rs.questionInt('Digite um numero inteiro: ');

if (isOdd(num)) {
    console.log('É ímpar');
} else {
    console.log('É par');
}