/*Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada
entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.*/

var user = require('readline-sync');
var nome, nota1, nota2, media;
var repetir = "sim";
var peso1 = 3;
var peso2 = 7;

calcularMedia();
while (repetir == 'sim' || repetir == 'Sim' || repetir == 'SIM') {
    repetir = user.question("Deseja repetir o processo para quantos alunos: ");
    for (var i = repetir; i > 0; i--) {
        calcularMedia();
    }
    repetir = user.question("Deseja calcular outras medias? ")
    resultado = 1;
}
console.log("Obrigado pela preferência, tenha um bom dia!");

function calcularMedia() {
    nome = user.question("Digite o nome do aluno: ");
    nota1 = user.questionInt("Digite a primeira nota: ");
    nota2 = user.questionInt("Digite a segunda nota: ");
    media = ((nota1 * peso1) + (nota2 * peso2)) / (peso1 + peso2);
    console.log("O aluno " + nome + " tem uma média: " + media);
}