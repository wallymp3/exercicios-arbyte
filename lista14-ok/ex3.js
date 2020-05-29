/*​Faça um algoritmo que receba um número de um episódio deBreaking Bad.
Após isso o algoritmo deve imprimir o elenco de personagens e também de qualtemporada é este episódio.
Caso o episódio seja inválido dizer ao usuário que não existe este episódio.Utilize a api : ​
https://www.breakingbadapi.com/api/episodes/​{NUMERO_DO_EPISODIO}
Exemplo episodio 10 : ​https://www.breakingbadapi.com/api/episodes/10 */

const axios = require('axios');
const rs = require('readline-sync');

var episodio = rs.questionInt('Digite o numero de um episodio: ');

var verEpisodio = (resposta) => {
    if (resposta.data != '') {
        var temporada = resposta.data[0].season;
        var personagens = resposta.data[0].characters;
        console.log(`Temporada: ${temporada} - Personagens: ${personagens}`);
    } else {
        console.log('Episodio não encontrado');

    }
}
axios.get(`https://www.breakingbadapi.com/api/episodes/${episodio}`)
    .then(verEpisodio)

.catch(function(error) {
    console.log(error)
})