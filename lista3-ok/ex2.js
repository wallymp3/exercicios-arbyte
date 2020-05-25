/*Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM
usar o operador de multiplicação (*)*/

var user = require('readline-sync');
var n1 = user.questionInt("Digite o primeiro valor: ");
var n2 = user.questionInt("Digite o segundo valor: ");
var count = 1,
    result = 0;
while (count <= n2) {
    result = n1 + result;
    ++count;
}
console.log(result);