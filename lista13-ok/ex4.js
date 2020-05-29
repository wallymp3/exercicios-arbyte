/*Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros da
europa e depois disso aplicar a média em cima do campo Horsepower.*/

var fs = require('fs');
var json = fs.readFileSync('pack-json/cars.json');
var cars = JSON.parse(json);

var carrosEuropeus = cars.filter((cars) => cars.Origin == "Europe")

var media = carrosEuropeus.reduce(function(total, item, indice, array) {
    total += item.Horsepower
    if (indice == array.length - 1) {
        return total / array.length;
    }
    return total;
}, 0)

console.log(`A media de potência é ${media.toFixed(2)}`);