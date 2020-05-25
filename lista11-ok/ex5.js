/*Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
Utilize o pacote : https://www.npmjs.com/package/age-calculator/*/

var rs = require('readline-sync');
let { AgeFromDateString } = require('age-calculator');

var num = rs.question('Digite sua data de nascimento (yyyy-mm-dd): ');

let ageFromString = new AgeFromDateString(num).age;
console.log("Sua idade é: ", ageFromString);