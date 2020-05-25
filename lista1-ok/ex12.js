/*Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo
seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).*/

var user = require('readline-sync');
console.log("Feminino = F | Masculino = M");
var gen = user.question("Qual seu Genero: ");
var estadoCivil = user.question("Qual seu estado Civil: ");
if (gen == 'F' && estadoCivil == 'Casada' || estadoCivil == 'casada') {
    var tempoCasada = user.question("Esta a quanto tempo casada? ");
    console.log("Genero: " + gen + ", Estado Civil: " + estadoCivil + ", tempo de casada: " + tempoCasada + " anos");
} else {
    console.log("Genero: " + gen + ", Estado Civil: " + estadoCivil);
}