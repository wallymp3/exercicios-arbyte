/*Elabore um programa para testar se uma senha digitada é igual a “batatafrita”.
Se a senha estiver correta escreva
“Acesso permitido”,
do contrário emita a mensagem
“Você não tem acesso ao sistema”.*/

var user = require('readline-sync');
var resultadoDoUsuario = user.question("Digite sua senha: ");
if (resultadoDoUsuario == "batatafrita") {
    console.log("Acesso permitido")
} else {
    console.log("Você não tem acesso ao sistema.");
}