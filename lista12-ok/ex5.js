/* Pegue o objeto carro da atividade 1 e exporte ele como um objeto módulo
Exemplo slide PPT :
Para isso crie um arquivo chamado carro.js e adicione a classe criada na atividade 1
neste arquivo.
Adapte a atividade 1 para usar a referencia por módulo da classe Carro.*/

var Car = require('./js-pack/carro.js');
var rs = require('readline-sync');

function criarCarro() {
    var carro = new Car();
    carro.model = rs.question('Qual a marca do automovel: ');
    carro.name = rs.question('Escolha o modelo do seu automovel: ');
    carro.color = rs.question('Escoha a cor do seu automovel: ');
    return carro;
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

console.log(carroAntigo);
console.log(novoCarro);