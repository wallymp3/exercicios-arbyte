/*Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e
o
segundo é o valor final do contador (verifique se o valor inicial fornecido é inferior ao
valor final). Usando o comando For, escreva na tela uma contagem que comece no
primeiro número lido, escreva os números seguintes colocando apenas um número em
cada nova linha da tela, até chegar ao valor final indicado.
Entre com o Valor Inicial: 11
Entre com o Valor Final: 13*/

var user = require("readline-sync");
var vInicial, vFinal;
var check = 'no';

while (check == 'no') {
    digitarValores();
    if (vFinal > vInicial) {
        for (var i = vInicial; vFinal >= i; i++) {
            console.log(i);
            check = 'ok';
        }
    } else {
        console.log("Valor final menor que valor inicial");
        check = 'no';
    }
}
console.log("Calculo realizado!");

function digitarValores() {
    vInicial = user.questionInt("Entre com o valor inicial: ");
    vFinal = user.questionInt("Entre com o valor final: ");
}