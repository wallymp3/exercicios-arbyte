/*Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
volume (v = 4/3.pi.R3).
Então solicite ao usuário o raio e a esfera e utilize a função para exibir o resultado.*/

var user = require('readline-sync');
var diametro = user.questionInt('Digite o raio da circunferencia: ');
console.log(calcVolumeCircuferencia(diametro));

function calcVolumeCircuferencia(diametro) {
    volume = 4 / 3 * 3.14 * Math.pow(diametro, 3);
    return volume;
}