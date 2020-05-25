/* Tendo como entrada a altura e o sexo codificado da seguinte forma:
Valor 1 para feminino
Valor 2 para masculino
de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando
as seguintes
Fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7 */

var user = require('readline-sync');
var genero = user.question('Digite 1 para Feminino e 2 para Masculino: ');
var altura = user.question('Digite sua altura: ');
var resultado;
if (genero == 1) {
    resultado = (62.1 * altura) - 44.7;
    console.log('O seu peso ideal é: ' + resultado.toFixed(2));
} else {
    resultado = (72.7 * altura) - 58;
    console.log('O seu peso ideal é: ' + resultado.toFixed(2));
}