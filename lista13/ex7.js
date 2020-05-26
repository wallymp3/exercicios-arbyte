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
var cars2 = JSON.parse(json);

var potencia = cars.sort((a, b) => b.Horsepower - a.Horsepower);
var aceleracao = cars2.sort((a, b) => b.Acceleration - a.Acceleration);

var escolha = rs.question('a. Potencia, b. Aceleracao ou F. Sair:\n> ');
if (escolha.toUpperCase() == "B") {
    console.log(`O carro com menor potência é o ${aceleracao[0].Car}`);
} else if (escolha.toUpperCase() == 'A') {
    console.log(`O carro mais potente é o ${potencia[0].Car}`);
} else {
    console.log('Não entendi');
}