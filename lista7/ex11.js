/*Faça um programa que receba uma palavra e verifica se a palavra está cometendo o
seguinte erro de português
Antes de “p” ou “b” devemos usar M
Caso a palavra esteja errada informar o erro
Se não dizer que a palavra está certa.
Utilize o método includes()*/

var rs = require('readline-sync')

var pal = rs.question('Digite uma palavra e verificarei se antes de P ou B ela esta usando a grafia correta: ')
if (pal.includes('np') || pal.includes('nb')) {
    console.log('Antes de P ou B devemos usar M!')
} else if (pal.includes('mp') || pal.includes('mb')) {
    console.log('A palavra esta correta.')
} else {
    console.log('Se digitou uma palavra boa, beleza. Se nao, se foder otario.')
}