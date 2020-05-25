/*Faça um programa que receba uma palavra e diga se existe vogais ou não.
Utilize o método indexOf()*/

var rs = require('readline-sync')

var pal = rs.question('Insira uma palavra e direi se ela possui vogais ou nao: ')
var arr = []
var vog = ['a', 'e', 'i', 'o', 'u']

for (i = 0; i < pal.length; i++) {
    arr.push(pal.charAt(i))
}
var temVogal = false
for (i = 0; i < pal.length; i++) {
    var letra = arr[i]
    if (vog.includes(letra)) {
        temVogal = true
    }
}
if (temVogal) {
    console.log('Possui vogais')
} else {
    console.log('Nao possui vogais')
}