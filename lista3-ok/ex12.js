/*Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos
números fornecidos.*/

var user = require('readline-sync');
var count = 1,
    nums = 0,
    result = 0;
while (count <= 15) {
    num = user.questionInt("Digite um numero " + count + ": ");
    result += num;
    ++count;
}
result = result / 15;
console.log("A media dos numero fornecidos e: " + result);