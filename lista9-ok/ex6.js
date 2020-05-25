/*Escreva uma função que receba dois números o primeiro será a base e o segundo a
potência e no final a função retorna a base elevada pela potência.
Faça um programa que peça ao usuário a base e a potência e forneça para a função,
no final imprima o resultado.
OBS: O algoritmo só precisa saber lidar com números inteiros.*/

var user = require('readline-sync');
var num1 = user.questionInt('Digite a base: ');
var num2 = user.questionInt('Digite a potencia: ');
console.log('A resultado é: ' + potencia(num1, num2));

function potencia(x, y) {
    var calc = x ** y;
    return calc;
}