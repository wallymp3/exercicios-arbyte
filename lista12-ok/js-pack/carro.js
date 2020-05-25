/* Pegue o objeto carro da atividade 1 e exporte ele como um objeto módulo
Exemplo slide PPT :
Para isso crie um arquivo chamado carro.js e adicione a classe criada na atividade 1
neste arquivo.
Adapte a atividade 1 para usar a referencia por módulo da classe Carro.*/

module.exports = class Car {
    constructor(model, name, color, velocidade) {
        this.model = model;
        this.name = name;
        this.color = color;
        this.velocidade = velocidade;
    }
    setAcelerarCarro() {
        this.velocidade += 10;
        return this.velocidade;
    }
    setFrearCarro() {
        this.velocidade -= 5;
        return this.velocidade;
    }
    setDesligarCarro() {
        if (this.velocidade == 0) {
            return true;
        } else {
            return false;
        }
    }
}