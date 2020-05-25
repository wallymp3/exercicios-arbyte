/*Faça uma função que receba um número e retorne se é perfeito ou não.
Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não
utilizando a função e imprimindo o resultado no final.
OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é
igual a ele mesmo
Exemplo 6 possui os seguintes divisores
1 + 2 + 3 = 6*/

var user = require('readline-sync');
var num1 = user.questionInt('Digite um numero: ');
numeroPerfeito(num1);


function numeroPerfeito(x) {
    var cont = 0;
    for (var i = x - 1; i > 0; i--) {
        if (x % i == 0) {
            cont = cont + i;
        }

    }
    if (cont == x) {
        console.log("É um número perfeito");
    } else {
        console.log("Não é um número perfeito");
    }
}