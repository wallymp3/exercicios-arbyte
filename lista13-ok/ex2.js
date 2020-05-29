/*Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base
cars.json
O campo que define o país no cars.json é Origin
A comparação da string pode ser utilizada usando a palavra “Japan”*/

var lodash = require('lodash');
var fs = require('fs');
var json = fs.readFileSync('pack-json/cars.json');
var cars = JSON.parse(json);

var carrosJaponeses = cars.filter((cars) => { return cars.Origin == "Japan" })
console.log(carrosJaponeses)