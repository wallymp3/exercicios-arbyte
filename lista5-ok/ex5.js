/*Fazer um programa que calcule e imprima o fatorial de um número fornecido pelo usuário,
usando o comando For.. Perguntar ao usuário se ele deseja calcular o fatorial de
outro número e repetir a execução do programa tantas vezes quantas o usuário indicar.
Exemplo de tela de saída:*/

var user = require('readline-sync');
var repetir = "sim";
var resultado = 1;

while (repetir == 'sim' || repetir == 'Sim' || repetir == 'SIM') {
    num = user.questionInt("Digite um numero para calcular o seu fatorial: ")
    for (var i = num; i > 1; i--) {
        resultado *= i;
    }
    console.log("O valor é: " + resultado);
    repetir = user.question("Deseja calcular outro numero? ")
    resultado = 1;
}
console.log("Obrigado pela preferência, tenha um bom dia!");