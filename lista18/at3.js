// Crie uma função que multiplica dois números, logo após crie um
// teste Utilizando o Jest para garantir que a multiplicação desses valores está correta.

const mult = (n1, n2) => {
    if (typeof(n1) != 'number' || typeof(n2) != 'number') {
        console.log("Um dos valores digitados não é um número válido");
    } else {
        return n1 * n2;
    }
}

module.exports = mult;