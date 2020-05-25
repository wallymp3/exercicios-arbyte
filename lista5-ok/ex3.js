/* Faça um programa que escreva na tela os números pares entre 0 e 50, usando um
comando For. Não utilize nenhum IF/THEN neste programa, apenas o comando For-Do. */

var rs = require('readline-sync');

ent = rs.question('Aperte qualquer tecla: ');

for (a = 0; a <= 50; a = a + 2) {
    console.log(a);
}