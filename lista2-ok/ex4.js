/*Uma empresa abriu uma linha de crédito para os funcionários.
O valor da prestação não pode ultrapassar 30% do salário.
Faça um programa que receba o salário, o valor do empréstimo e o número de
prestações e informe se o empréstimo pode ser concedido. Nenhum dos valores
informados pode ser zero ou negativo.*/

var user = require('readline-sync');
var salario = user.question("Digite seu salario: ");
var credito = user.question("Digite o valor do credito pedido: ");
var parcelas = user.question("Digite em quantas parcelas deseja pagar: ");
var valorMensal = credito / parcelas;
if (salario != null && credito != null && parcelas != null) {
    if (valorMensal <= salario * 0.3) {
        console.log("Seu credito foi APROVADO");
    } else {
        console.log("Seu credito foi REPROVADO");
    }
} else {
    console.log("Nao pode haver valores em branco");
}