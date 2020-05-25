/* Escreva um programa para ler o ano de nascimento de uma pessoa e
escrever uma mensagem que diga se ela poderá ou não votar este ano
(não é necessário considerar o mês em que ela nasceu). */

var user = require('readline-sync');
var data = user.questionInt("Insira seu ano de nascimento: ");
var result = 2020 - data;
if (result >= 18 && result < 65) {
    console.log("Você é obrigado a votar");
} else if (result >= 16 && result < 18 || result >= 65) {
    console.log("Voce pode votar, mas não é obrigatório");
} else {
    console.log("Voce nao pode votar");
}