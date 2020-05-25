var user = require('readline-sync');
var frase = user.question("Digite uma frase: ");
var textSplit = frase.split(' '); //Montando o Array com Split
var tamInicial = 0;
var longest;

//Achar maior palavra
for (var i = 0; i < textSplit.length; i++) {
    if (textSplit[i].length > tamInicial) {
        tamInicial = textSplit[i].length;
        longest = textSplit[i];
    }
}
// Adicionando borda superior
var count = longest.length + 4;
var estrela = '*'.repeat(count);

//Montando as palavras por linha
var espaco;
var dist = ' ';
console.log(estrela);
for (var i = 0; i < textSplit.length; i++) {
    espaco = (count - 1) - (textSplit[i].length + 2);
    var linha = ('* ' + textSplit[i] + dist.repeat(espaco) + '*')
    console.log(linha);
}
// Montando borda inferior
console.log(estrela);