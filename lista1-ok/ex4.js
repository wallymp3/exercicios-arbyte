/* As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$
0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de
maçãs compradas, calcule e escreva o valor total da compra */

var user = require('readline-sync');
var macas = user.questionFloat('Digite a quantidade de macas compradas: ')

if (macas < 12) {
    var resultado = macas * 0.30;
    console.log('Total: R$' + resultado.toFixed(2));
} else {
    var resultado = macas * 0.25;
    console.log('Total: R$' + resultado.toFixed(2));
}