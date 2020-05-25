/*Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais
dessa palavra e imprime a palavra novamente porém sem as vogais.
EX: Entrada banana
O algoritmo imprime :
Bnn
Utilize o método split() para quebrar a string e depois montar ela sem vogais.*/

var rs = require('readline-sync')

var pal = rs.question('Insira uma palavra e ela sera retornada sem vogais: ')
var vog = ['a', 'e', 'i', 'o', 'u']
var arr = []

for (i = 0; i < pal.length; i++) {
    arr.push(pal.charAt(i))
}
for (i = 0; i < arr.length; i++) {
    var letra = arr[i]
    if (vog.includes(letra)) {
        arr.splice(i, 1)
    }
}
console.log(arr.join(''))