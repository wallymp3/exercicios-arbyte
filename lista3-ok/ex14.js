/* Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir
qual é a menor idade.*/

var user = require('readline-sync');
var numero = [0];
var cont = 0;
var result1 = 0;


while (cont < 8) {
    numero[cont] = user.questionInt('Digite a ' + (cont + 1) + ' idade: ');
    cont++;
}

var maior = Math.max.apply(null, numero);
console.log('A maior idade é: ' + maior);