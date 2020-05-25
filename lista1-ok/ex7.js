/*Escreva um programa para ler o número de lados de um polígono regular e a medida do
lado (em cm). Calcular e imprimir o seguinte:
− Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
− Se o número de lados for igual a 5 escrever PENTÁGONO.*/

var user = require('readline-sync');
var qtdLados = user.questionInt("Digite a quantidade de lados: ");
var compLados = user.questionInt("Digite a tamanho da arestas: ");
var result;
p = (3 * compLados) / 2;
if (qtdLados == 3) {
    result = compLados * compLados * Math.sqrt(3) / 2;
    console.log("A area do triangulo e :" + result.toFixed(2));
} else if (qtdLados == 4) {
    result = compLados * compLados;
    console.log("A area do quadrado e: " + result.toFixed(2));
} else {
    result = (compLados * compLados * Math.sqrt(3) / 2) * 5;
    console.log("A area do pentagono e :" + result.toFixed(2));
}