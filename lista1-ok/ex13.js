/*Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja
negativo, imprimindo o resultado.*/

var user = require('readline-sync');
var num = user.questionInt("Digite um Valor: ");
if (num >= 0) {
    num *= 2;
    console.log(num);
} else {
    num *= 3;
    console.log(num);
}