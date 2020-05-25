//Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

var user = require('readline-sync');
var v1 = user.question("Digite o primeiro valor: ");
var v2 = user.question("Digite o segundo valor: ");
if (v1 % v2 == 0) {
    console.log(v1 + " e divisivel por " + v2);
} else {
    console.log(v1 + " nao e divisivel por " + v2);
}