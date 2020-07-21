// Crie uma função que recebe três parâmetros, essa função deve
// retornar a soma dos dois primeiros parâmetros e multiplicar pelo terceiro parâmetro,
// por fim crie um teste utilizando o Jest para garantir o resultado está correto.

const calcOp = (n1, n2, n3) => {
    if (typeof(n1) != 'number' || typeof(n2) != 'number' || typeof(n3) != 'number') {
        console.log("Um dos valores digitados não é um número válido");
    } else {
        return ((n1 + n2) * n3);
    }
}

module.exports = calcOp;