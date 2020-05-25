/*Fazer um programa que leia um valor de DDI e informe o nome do país
Correspondente ao DDI. Por exemplo:
Se lê 1 imprime "Estados Unidos",   Se lê 49 imprime "Alemanha",
Se lê 54 imprime "Argentina",    Se lê 55 imprime "Brasil",  Se lê 35 imprime "Portugal".*/

var user = require('readline-sync');
var ddi = user.questionInt("Digite o DDI: ");

if (ddi == 1) {
    console.log('Estados Unidos');
} else if (ddi == 49) {
    console.log('Alemanha');
} else if (ddi == 54) {
    console.log('Argentina');
} else if (ddi == 55) {
    console.log('Brasil');
} else if (ddi == 49) {
    console.log('Portugal');
} else {
    console.log('DDI não cadastrado');
}