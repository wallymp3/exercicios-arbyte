/* Faça um programa onde o usuário irá escolhe se que Converte graus Celsius
para Fahrenheit ou Fahrenheit para Celsius.*/

var user = require('readline-sync');
console.log("Celsius to Fahrenheit: 1");
console.log("Fahrenheit to Celsius: 2");
var conv = user.question("Deseja converter: ");
if (conv == 1) {
    var celsius = user.question("Digite a temperatura em Celsius: ");
    celsius = (celsius * 9 / 5) + 32;
    console.log("A temperatura em Fahrenheit é: " + celsius + " F");
} else {
    var fah = user.question("Digite a temperatura em Fahrenheit: ");
    fah = (fah - 32) * 5 / 9;
    console.log("A temperatura em Celsius é: " + fah + " C");
}