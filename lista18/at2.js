// Crie uma função que some três números, logo após crie um teste
// utilizando Jest para garantir que a soma desses valores está correta.

function somar(n1, n2, n3) {
    if (typeof(n1) != 'number' || typeof(n2) != 'number' || typeof(n3) != 'number') {
        console.log("Um dos valores digitados não é um número válido");
    } else {
        soma = n1 + n2 + n3;
        return soma;
    }

}

module.exports = somar;