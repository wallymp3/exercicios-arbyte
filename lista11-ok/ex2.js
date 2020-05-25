/*Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc*/

var rs = require('readline-sync');
var fasamImc = require('fasam-imc-calc');

var imc = new fasamImc();

var peso = rs.questionFloat('Digite seu peso: ');
var altura = rs.questionFloat('Digite sua Altura: ');

console.log('IMC = ' + imc.calc(peso, altura));