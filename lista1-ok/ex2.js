//Faça um programa que receba um número via teclado e verifique se este número é par ou ímpar.

var inicializador = require('readline-sync');
var numero = inicializador.question("Digite um numero qualquer: ");

if (numero % 2 == 0) {
    console.log('Esse número é par');
} else {
    console.log('Esse número é ímpar');
}