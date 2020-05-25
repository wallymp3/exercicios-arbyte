/*Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é
Equilátero, Isósceles ou Escaleno.
Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.*/

var user = require('readline-sync');
var l1 = user.questionInt("Digite o primeiro lado: ");
var l2 = user.questionInt("Digite o segundo lado: ");
var l3 = user.questionInt("Digite o terceiro lado: ");

if (l1 > 0 && l2 > 0 && l3 > 0) {
    if (l1 == l2 && l1 == l3 && l2 == l3) {
        console.log("Este e um triangulo Equilatero")
    } else if (l1 != l2 && l1 != l3 && l2 != l3) {
        console.log("Este e um triangulo Escaleno")
    } else {
        console.log("Este e um triangulo Isósceles")
    }
} else {
    console.log("Nao e um triangulo valido")
}