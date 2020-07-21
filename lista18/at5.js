// Crie uma função que recebe dois parâmetros, sendo o primeiro a base e, o segundo
// o expoente, essa função deve retornar a base elevada ao expoente, por fim crie um
// teste utilizando o Jest para garantir que o resultado está correto.

const pow = (n1, n2) => {
    if (typeof(n1) != 'number' || typeof(n2) != 'number') {
        console.log("Um dos valores digitados não é um número válido");
    } else {
        return Math.pow(n1, n2);
    }
}

module.exports = pow;