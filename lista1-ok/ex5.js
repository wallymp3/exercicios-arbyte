/* Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores
iguais) e escrevê-los em ordem crescente.*/

var user = require('readline-sync');
var p1 = user.question("Digite o primeiro valor: ");
var p2 = user.question("Digite o segundo valor: ");
var p3 = user.question("Digite o terceiro valor: ");

if (p1 < p2 && p2 < p3) {
    console.log(p1, p2, p3);
} else if (p1 < p3 && p3 < p2) {
    console.log(p1, p3, p2);
} else if (p2 < p1 && p1 < p3) {
    console.log(p2, p1, p3);
} else if (p2 < p3 && p3 < p1) {
    console.log(p2, p3, p1);
} else if (p3 < p1 && p1 < p2) {
    console.log(p3, p1, p2);
} else if (p3 < p2 && p2 < p1) {
    console.log(p3, p2, p1);
}