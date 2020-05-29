/*Faça um algoritmo que solicite ao usuário A ou B
Caso o usuário escolha A
O algoritmo deve imprimir toda informação do carro com maior aceleração
Caso o usuário escolha B
O algoritmo deve imprimir toda informação do carro com maior potência
Se houver mais de um carro imprimir todos 1 por 1.*/

var rs = require('readline-sync');
var fs = require('fs');
var json = fs.readFileSync('pack-json/cars.json');
var cars = JSON.parse(json);
var calc = null;


var escolha = rs.question('a. Potencia, b. Aceleracao ou F. Sair:\n> ');
if (escolha.toUpperCase() == "B") {
    calc = cars.sort((a, b) => b.Acceleration - a.Acceleration);
    console.log(`O carro com maior aceleração é o ${calc[0].Car}`);
} else if (escolha.toUpperCase() == 'A') {
    calc = cars.sort((a, b) => b.Horsepower - a.Horsepower);
    console.log(`O carro mais potente é o ${calc[0].Car}`);
} else {
    console.log('Não entendi');
}