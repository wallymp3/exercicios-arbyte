/*Faça um programa que receba um nome e imprima a terceira letra do nome.
Utilize o método charAt() para esta atividade.*/

var rs = require('readline-sync')

var name = rs.question('Insira um nome e imprimirei a terceira sua terceira letra: ')
var arr = []

for (i = 0; i < name.length; i++) {
    if (name.charAt(i) != ' ') {
        arr.push(name.charAt(i))
    }
}
console.log(arr[2])