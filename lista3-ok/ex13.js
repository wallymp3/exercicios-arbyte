/*Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e
a soma dos pares */

var user = require('readline-sync');
var numero = [0, 0, 0, 0, 0];
var cont = 0;
var result1 = 0;
var result2 = 1;

while (cont < 5) {
    numero[cont] = user.questionInt('Digite o ' + (cont + 1) + ' numero: ');
    cont++;
}
for (var i = 0; i < 5; i++) {
    if (numero[i] % 2 == 0) {
        result1 += numero[i];
        console.log(numero[i]);
    } else {
        result2 *= numero[i];
        console.log(numero[i]);
    }
}
console.log('Soma dos pares: ' + result1);
console.log('Produto dos impares: ' + result2);