var calculaMedia = require('./js-pack/calcula-media')
var rs = require('readline-sync');
var arr = [];

while (true) {
    var num = rs.questionInt('Digite numeros e retornarei a media deles: ');
    var novo = rs.keyInYN('Quer adicionar outro numero? ');
    arr.push(num);
    if (novo == false) {
        break;
    }
}
console.log('A média é: ' + calculaMedia(arr));