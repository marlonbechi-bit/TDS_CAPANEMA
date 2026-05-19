// Sintaxe de um objeto {}
const aluno = {
    nome: "Marlon",
    idade: 31,
    curso: "Técnico em Desenvolvimento de Sistemas"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);

aluno.matricula = "2026TDS"; // adiciona uma nova propriedade
aluno.idade = 18; // atualiza caso existir

delete aluno.curso; // remove a propriedade
console.log(aluno);


