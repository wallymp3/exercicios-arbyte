/*Escreva um programa que simule uma partida de pedra papel e tesoura.
Deve ser solicitado o nome do jogador A e do jogador B.
Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B.
No final o programa deve imprimir quem ganhou.
Dicas:
Papel ganha de pedra
Tesoura ganha de papel
Pedra ganha de tesoura
Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync*/

var rs = require('readline-sync');

function calcularGanhador(jogador, jogador2) {
    var jogador, jogador2;
    if (jogador == 'pedra' && jogador2 == 'pedra') {
        return 'Empate';
    } else if (jogador == 'pedra' && jogador2 == 'papel') {
        return 'Jogador 2 - Ganhou';
    } else if (jogador == 'pedra' && jogador2 == 'tesoura') {
        return 'Jogador 1 - Ganhou';
    } else if (jogador == 'papel' && jogador2 == 'pedra') {
        return 'Jogador 1 - Ganhou';
    } else if (jogador == 'papel' && jogador2 == 'papel') {
        return 'Empate';
    } else if (jogador == 'papel' && jogador2 == 'tesoura') {
        return 'Jogador 2 - Ganhou';
    } else if (jogador == 'tesoura' && jogador2 == 'pedra') {
        return 'Jogador 2 - Ganhou';
    } else if (jogador == 'tesoura' && jogador2 == 'papel') {
        return 'Jogador 1 - Ganhou';
    } else if (jogador == 'tesoura' && jogador2 == 'tesoura') {
        return 'Empate';
    }
}

var jogar = true;
while (jogar) {
    var jogador = rs.question('Turno do Jogador 1: ', { hideEchoBack: true });
    var jogador2 = rs.question('Turno do Jogador 2: ', { hideEchoBack: true });
    console.log('Resultado: ' + calcularGanhador(jogador, jogador2));
    var jogar = rs.keyInYN('Deseja jogar novamente? : ');
}