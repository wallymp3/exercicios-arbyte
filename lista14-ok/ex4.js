/* Faça um algoritmo que receba uma CEP e diga qual é o endereçocompleto (Cidade, rua, estado) 
deste CEP.Utilize a 
API : ​https://api.postmon.com.br/v1/cep/​{CEP}
Exemplo CEP :​https://api.postmon.com.br/v1/cep/8901002 */

const axios = require('axios');
const rs = require('readline-sync');

var cep = rs.question('Digite o CEP: ');

var verCEP = (resposta) => {
    // console.log(resposta.data)
    var rua = resposta.data.logradouro;
    var cidade = resposta.data.cidade;
    var estado = resposta.data.estado;
    console.log(`Rua: ${rua}\nCidade: ${cidade}\nEstado: ${estado}`);
}
axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    .then(verCEP)

.catch(function(error) {
    console.log(error)
})