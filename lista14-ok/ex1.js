/*OBRIGATORIO)​Solicite ao usuário para inserir yes ou noApós isso utilize a API ​https://yesno.wtf/api Esta 
api traz um dado aleatório yes ou noNo final imprima se o usuário acertou ou não*/

const axios = require('axios');
const rs = require('readline-sync');


var question = rs.question('Say Yes or No: ');

axios.get(`https://yesno.wtf/api`)
    .then(function(response) {
        if (response.data.answer == question.toLocaleLowerCase()) {
            console.log('Você acertou');
        } else {
            console.log('Você errou');
        }
    })
    .catch(function(error) {
        console.log(error)
    })