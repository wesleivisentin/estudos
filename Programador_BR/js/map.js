

function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]


function temMenosDe30(aluno){
    return aluno.idade < 30
}

console.log(alunosComMenosDe30);