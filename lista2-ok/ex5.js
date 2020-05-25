/*Faça um programa que calcule e imprima o valor em reais de cada kw.
O valor em reais a ser pago e o novo valor a ser pago por essa residência com um
desconto de 10%. 
Dado: 100 kilowatts custa 1/7 do salario minimo. Pergunte a quantidade
de kw gasto na residência.*/

var user = require('readline-sync');
var watts = user.questionInt("Digite a quantidade de Kilowatts gasto em sua residencia: ");
var desc = user.question("Vai ser pago com desconto: ");
desc = desc.toUpperCase();
var salarioMinimo = 1042;
var kilowatts = (salarioMinimo / 7) / 100;
if (desc == 'SIM') {
    var result = (kilowatts * watts);
    result -= result * 0.10;
    console.log("O valor total: " + result.toFixed(2));
} else {
    var result = (kilowatts * watts);
    console.log("O valor total: " + result.toFixed(2));
}