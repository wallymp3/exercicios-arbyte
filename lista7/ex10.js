/*Faça um programa que receba uma palavra e verifica se ela termina com “al” se termina
com “al” então imprime a palavra se não imprime “palavra não identificada”.
Utilize o método endsWith()*/

var rs = require('readline-sync')

var pal = rs.question('Insira uma palavra, se ela terminar com "al", sera impressa: ')
var end = pal.endsWith('al')

// if(pal.charAt(pal.length - 2) == 'a' && pal.charAt(pal.length - 1) == 'l') {
//     console.log(pal)
// }

if (end) {
    console.log(pal)
} else {
    console.log('Palavra nao identificada')
}