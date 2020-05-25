/*Faça um programa que calcule a potência (potenciação) de um número.
Para isso ele deve receber dois números de entrada: o primeiro número é a base da
potência, o segundo número será a potência.*/

var user = require('readline-sync');
var numero = user.question("Digite um numero: ");
var potencia = user.question("Digite a potencia: ");
var resultado = 1;
while (potencia > 0) {
    resultado = resultado * numero;
    --potencia;
}
console.log(resultado);