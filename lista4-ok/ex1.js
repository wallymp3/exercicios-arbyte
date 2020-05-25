/* Escreva um programa que pedirá para o usuário dois números entre 1e 100. 
O programa deve, então, iterar de um em um do menor pro maior, sempreimprimindo o 
número na tela do usuário. Entretanto, caso o número seja divisível por 7,o programa 
deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisívelpor 5, o 
programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, oprograma deveria 
imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvezprecisem fazer uso do 
recurso “user.questionInt()” que transforma o conteúdo de uminput do usuário de string para inteiro */

var rs = require('readline-sync');

var num1 = rs.questionInt('Digite o primeiro numero entre 1 e 100: ')
var num2 = rs.questionInt('Digite o segundo numero entre 1 e 100: ')

var maior = Math.max(num1, num2);
var menor = Math.min(num1, num2);

while (menor <= maior) {
    if (menor % 5 == 0 && menor % 7 == 0) {
        console.log('Ping Pong');
    } else if (menor % 7 == 0) {
        console.log('Ping');
    } else if (menor % 5 == 0) {
        console.log('Pong');
    } else {
        console.log(menor);
    }
    menor++;
}