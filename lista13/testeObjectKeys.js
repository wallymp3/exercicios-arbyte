/*Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
Utilize o campo Horsepower para descobrir qual é o mais potente*/

var fs = require('fs');
var json = fs.readFileSync('pack-json/cars.json');
var cars = JSON.parse(json);

var superPotencia = cars.sort((a, b) => a.Horsepower - b.Horsepower);

console.log(superPotencia);