/*Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na
tela (EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o
usuário digitar o nome “Final”. No final, o programa deve imprimir o número de usuários
que foram cadastrados no total.*/

var rs = require('readline-sync');
var nomes = [];
var idades = [];
var cont = 0;

while (cont >= 0) {
    nomes[cont] = rs.question('Digite o nome: ')
    if (nomes[cont] != 'Final') {
        idades[cont] = rs.question('Digite a idade: ')
        console.log(`O nome digitado foi: ${nomes[cont]}`);
    } else {
        break
    }
    cont++
}
console.log(`Usuários cadastrados = ${nomes.length-1}`);