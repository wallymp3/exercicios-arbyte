/*Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, crie um
objeto Carro e atribua as entradas do usuário neste objeto.
No final o programa deve imprimir as informações do carro.
Utilize a criação de objetos para resolver este problema*/

var rs = require('readline-sync');

function devolveCarro() {
    var carro = {};
    carro.marca = rs.question('Qual a marca do automovel: ');
    carro.modelo = rs.question('Escolha o modelo do seu automovel: ');
    carro.cor = rs.question('Escoha a cor do seu automovel: ');
    return carro;
}
var automovel = devolverCarro();
console.log(automovel);