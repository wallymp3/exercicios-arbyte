/* Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor. */

var rs = require('readline-sync');

function criarCarro() {
    var carro = new Car();
    carro.model = rs.question('Qual a marca do automovel: ');
    carro.name = rs.question('Escolha o modelo do seu automovel: ');
    carro.color = rs.question('Escoha a cor do seu automovel: ');
    return carro;
}
class Car {
    constructor(model, name, color) {
        this.model = model;
        this.name = name;
        this.color = color;
    }
}

var carroAntigo = new Car("Fiat", "Uno", "Branco");
var novoCarro = criarCarro();

if (carroAntigo.name == novoCarro.name &&
    carroAntigo.model == novoCarro.model &&
    carroAntigo.color == novoCarro.color) {
    console.log('Os carros são iguais')
} else {
    console.log('Os carros não são iguais')
}