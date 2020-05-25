/*Faça um programa que receba três notas, calcule e mostre a média aritmética entre
elas, caso a média aritmética seja:
Media maior ou igual a 7 imprimir :
ALUNO APROVADO
Media menor que 7 imprimir :
ALUNO REPROVADO*/

var user = require('readline-sync');
var nota1 = user.questionInt("Digite a primeira nota: ");
var nota2 = user.questionInt("Digite a segunda nota: ");
var nota3 = user.questionInt("Digite a terceira nota: ");
var result = (nota1 + nota2 + nota3) / 3;
if (result >= 7) {
    console.log("ALUNO APROVADO");
} else {
    console.log("ALUNO REPROVADO");
}