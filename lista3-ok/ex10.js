/* Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1   3    7    21
DICA: Você pode precisar usar a operação de módulo (a%b)*/

var user = require('readline-sync');
var num = user.question("Digite um numero: ");
var repete = num;
while (repete >= 0) {
    if (num % repete == 0) {
        console.log(repete)
            --repete;
    } else {
        --repete;
    }
}