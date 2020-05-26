//Faça um algoritmo que diga qual é o carro mais potente da lista cars.json.
//Utilize o campo Horsepower para descobrir qual é o mais potente

var rs = require('readline-sync');
var fs = require('fs');
var json = fs.readFileSync('pack-json/cars.json');
var cars = JSON.parse(json);

var num = rs.questionInt('Digite a Potencia: ')
var carrosComPontenciaMinima = cars.filter((cars) => cars.Horsepower > num);
console.log(carrosComPontenciaMinima.length);

// var potencia = (cars, num) => {
//     var maiorPot = [];
//     for (var i = 0; i < cars.length; i++) {
//         if (cars[i].Horsepower > num) {
//             maiorPot.push(cars[i]);
//         }
//     }
//     return maiorPot.length;
// }
// console.log(potencia(cars, num));