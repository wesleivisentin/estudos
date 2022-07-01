function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("Weslei", 27),
    novoAluno("Daniela", 22),
    novoAluno("João", 36),
    novoAluno("Gustavo", 46),
    novoAluno("Pedronsa", 69)
]

function idadeDaTurma(total,aluno) {
    return total + aluno.idade
}

console.log(alunos.reduce(idadeDaTurma, 0))