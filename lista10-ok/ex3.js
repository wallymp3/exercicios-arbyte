/*Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro
em formato JSON.
Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os
métodos da biblioteca ‘fs’ para salvar o arquivo.
Salve o json como ‘carro.json’*/

var rs = require('readline-sync');
var fs = require('fs');

var carroSerializado = fs.readFileSync('data/carro.json');
var carro = JSON.parse(carroSerializado);

console.log(carro);