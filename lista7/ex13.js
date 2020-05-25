/*Faça um programa que receba uma frase e troque a palavra ANTILOPE por um de seus
nomes cientificos : Kobus ellipsiprymnus*/

var rs = require('readline-sync')

var frase = rs.question('Insira uma frase contendo a palavra "antilope": ')
var str = frase.replace('antilope', 'Kobus ellipsiprymnus')
console.log(str)