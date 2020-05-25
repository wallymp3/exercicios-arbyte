/*Escolha um programa que você já fez em atividades passadas e faça o output do
terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk*/

var user = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

var repete = user.question("Digite a quantidade de vezes: ");
while (repete > 0) {
    log(chalk.blue("BIP ") + chalk.green("BIP"));
    --repete;
}