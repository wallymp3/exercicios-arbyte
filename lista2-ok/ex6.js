/*Elabore um algoritmo que calcule o que deve ser pago por um produto,
solicitando o preço da etiqueta do produto e a escolha da condição de
pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
pagamento escolhida e efetuar o cálculo adequado. Código Condição de
pagamento
- 1 À vista em dinheiro ou cheque, recebe 10% de desconto
- 2 À vista no cartão de crédito, recebe 15% de desconto
- 3 Em duas vezes, preço normal de etiqueta sem juros
- 4 Em duas vezes, preço normal de etiqueta mais juros de 10%*/

var user = require('readline-sync');
var precoProduto = user.question("Qual o preco do produto: ");
console.log("# - Condicoes de pagamento: ");
console.log("1 - A vista em dinheiro ou cheque");
console.log("2 - A vista em cartao de credito");
console.log("3 - Em duas vezes");
console.log("4 - Em tres vezes");
var opcaoCompra = user.question("Digite a condicao de pagamento: ");
if (opcaoCompra == 1) {
    precoProduto -= (precoProduto * 0.10);
    console.log("Total da compra: R$" + precoProduto);
} else if (opcaoCompra == 2) {
    precoProduto -= (precoProduto * 0.15);
    console.log("Total da compra: R$" + precoProduto);
} else if (opcaoCompra == 3) {
    console.log("Total da compra: R$" + precoProduto);
} else if (opcaoCompra == 4) {
    precoProduto -= (precoProduto * 0.10);
    console.log("Total da compra: R$" + precoProduto);
} else {
    console.log("Condicao invalida");
}