/*Faça uma função que recebe um número e devolve seu valor absoluto.
No final peça um número para o usuário e exiba o valor absoluto.*/

var user = require('readline-sync');
var num1 = user.questionInt('Digite um numero: ');
console.log(numeroAbsoluto(num1));

function numeroAbsoluto(x) {
    if (x < 0) {
        x *= -1;
        return x;
    }
    return x;
}