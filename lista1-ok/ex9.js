/*Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o
triângulo é Acutângulo, Retângulo ou Obtusângulo.
Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90o)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90o)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90o)*/

var user = require('readline-sync');
var l1 = user.questionInt("Digite o primeiro angulo: ");
var l2 = user.questionInt("Digite o segundo angulo: ");
var l3 = user.questionInt("Digite o terceiro angulo: ");
var soma = l1 + l2 + l3;
if (soma == 180) {
    if (l1 == 90 || l2 == 90 || l3 == 90) {
        console.log("Este e um triangulo Retangulo")
    } else if (l1 < 90 && l2 < 90 && l3 < 90) {
        console.log("Este e um triangulo Acutangulo")
    } else {
        console.log("Este e um triangulo Obtuso")
    }
} else {
    console.log("Nao e um triangulo valido")
}