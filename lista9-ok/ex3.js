/*Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna
essa idade expressa em dias.
Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado
utilizando a função criada.*/

var user = require('readline-sync');
var datas = ['anos', 'meses', 'dias'];
var calc = [];

for (var i = 0; i < 3; i++) {
    calc[i] = user.questionInt(`Digite sua idade em ${datas[i]}: `);
}
console.log("Sua idade em dias é: " + calcEmDias(calc));

function calcEmDias(calc) {
    var convert = calc[0] * 365;
    convert += calc[1] * 30;
    convert += calc[2];
    return convert;
}