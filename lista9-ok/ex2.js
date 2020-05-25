/*Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor
lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na
condição IF.*/

var user = require('readline-sync');
var nPrimo = user.questionInt('Digite um numero: ');
verificarNumPrimo(nPrimo);

function verificarNumPrimo(numero) {
    var divisores = 0;
    for (var i = 0; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        console.log('É um número primo');
    } else {
        console.log('Não é primo');
    }
}