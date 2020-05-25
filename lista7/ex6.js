/*Peça ao usuário para digitar dez valores numéricos e ordene por ordem crescente
esses valores, guardando-os num vetor e depois exibindo para o usuário.Para esta
atividade tente usar o algoritmo Bubble Sort (Método da bolha), pesquise sobre ele na
internet.*/


var rs = require('readline-sync')

function compareBigger(a, b) {
    return a - b
}
var arr = []
for (i = 0; i < 10; i++) {
    var num = rs.questionInt('Coloque 10 numeros e os organizarei em ordem crescente: ')
    arr.push(num)
    arr.sort(compareBigger)
}
console.log(arr)