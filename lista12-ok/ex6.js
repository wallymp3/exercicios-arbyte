var Car = require('./js-pack/carro.js');
var rs = require('readline-sync');

function criarCarro() {
    var carro = new Car();
    carro.model = rs.question('Qual a marca do automovel: ');
    carro.name = rs.question('Escolha o modelo do seu automovel: ');
    carro.color = rs.question('Escoha a cor do seu automovel: ');
    carro.velocidade = 0;
    return carro;
}

var novoCarro = criarCarro();
var repetir = true;
console.log('Vamos viajar?');


while (repetir) {
    console.log('------');
    console.log('O que deseja fazer? \n1. Acelerar, 2. Freiar, 3. Desligar Carro');
    var opcao = rs.question('> ');

    if (opcao != '1' && opcao != '2' && opcao != '3') {
        console.log('------');
        console.log('Não entendi, poderia repetir a opção');
    } else if (opcao == '1') {
        if (novoCarro.velocidade < 60) {
            console.log('Velocidade atual ' + novoCarro.setAcelerarCarro() + 'km/h');
        } else {
            console.log('Velocidade acima do permitido');
        }
    } else if (opcao == '2') {
        if (novoCarro.velocidade > 0) {
            console.log('Velocidade atual ' + novoCarro.setFrearCarro() + 'km/h');
        } else {
            console.log('Você não pode freiar, pois está parado');
        }
    } else if (opcao == '3') {
        if (novoCarro.setDesligarCarro()) {
            console.log('Carro desligado - Chegamos ao destino');
            repetir = false;
        } else {
            console.log('Não é possível desligar o carro');
        }
    }
}