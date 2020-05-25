/*Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
Solicite dois números para o usuário e forneça como argumento para esta função.
Escreva o resultado da função na tela dizendo qual menor número.*/

var user = require('readline-sync');

var num1 = user.questionInt('Digite o primeiro numero: ');
var num2 = user.questionInt('Digite o segundo numero: ');
calculoMaior(num1, num2);



function calculoMaior(x, y) {
    if (x > y) {
        console.log('O menor número é: ' + y);
    } else if (y > x) {
        console.log('O menor número é: ' + x);
    } else {
        console.log('Números iguais');
    }
}