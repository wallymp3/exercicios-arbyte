/*Faça um algoritmo que diga qual é o carro menos potente da lista cars.json.
Utilize o campo Horsepower para descobrir qual é o menos potente*/

var fs = require('fs');
var json = fs.readFileSync('pack-json/cars.json');
var cars = JSON.parse(json);

var menorPotencia = cars.sort((a, b) => a.Horsepower - b.Horsepower);
console.log(`O carro com menor potência é o ${menorPotencia[0].Car}`);

// var menorPotencia = (cars) => {
//     var menorPot = cars[0];
//     for (var i = 0; i < cars.length; i++) {
//         if (cars[i].Horsepower < menorPot.Horsepower) {
//             menorPot = cars[i];
//         }
//     }
//     return menorPot.Car;
// }