const axios = require('axios')
const rs = require('readline-sync')

var equacao = rs.question('Digite uma equacao: ')

axios.get(`https://newton.now.sh/simplify/${equacao}`)
    .then((resposta) => {
        var resultado = resposta.data.result
        console.log(resultado)
    })
    .catch((erro) => {
        console.log(erro)
    })