/*Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
palavra tem.
EX : saúde
2 consoantes
3 vogais*/

var rs = require('readline-sync')

var pal = rs.question('Insira uma palavra: ')
var arr = []
var vog = ['a', 'e', 'i', 'o', 'u']
var arrv = []
var arrc = []

for (i = 0; i < pal.length; i++) {
    arr.push(pal.charAt(i))
}
for (i = 0; i < pal.length; i++) {
    var tem = arr[i]
    if (vog.includes(tem)) {
        arrv.push(tem)
    } else {
        arrc.push(arr[i])
    }
}
console.log(`${arrv.length} vogais`)
console.log(`${arrc.length} consoantes`)