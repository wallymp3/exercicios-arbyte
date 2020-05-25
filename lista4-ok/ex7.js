/*Escreva um programa que apresente quatro opções:
(a) consulta saldo, (b) saque e (c) depósito e (d) sair.
O saldo deve iniciar em R$ 0,00.
A cada saque ou depósito o valor do saldo deve ser atualizado. Exemplo:*/

var rs = require('readline-sync');

var saldo = 0,
    saque = 0,
    deposito = 0;

while (opcao != 'd') {
    console.log('(a) consulta saldo, (b) saque e (c) depósito e (d) sair');
    var opcao = rs.question('Digite a opcao desejada: ');
    if (opcao == 'a') {
        console.log(`Seu saldo é de R$${saldo},00`);
    } else if (opcao == 'b') {
        saque = rs.questionInt('Digite o valor do saque: ')
        saldo -= saque;
    } else if (opcao == 'c') {
        deposito = rs.questionInt('Digite o valor do deposito: ')
        saldo += deposito;
    }
}