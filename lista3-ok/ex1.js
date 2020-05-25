/*Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP”
de acordo com o número inserido.
EX: usuário inseriu 3
O programa imprime:
BIP BIP
BIP BIP
BIP BIP*/
var user = require('readline-sync');
var repete = user.question("Digite a quantidade de vezes: ");
while (repete > 0) {
    console.log("BIP BIP");
    --repete;
}