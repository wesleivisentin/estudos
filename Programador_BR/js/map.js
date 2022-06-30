

function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]


function nomeIdade(aluno) {
    return aluno.nome + " tem " + aluno.idade + " anos."
}

console.log(alunos.map(nomeIdade));



// modificar objeto sem modificar a variavel original:

let alunoA = {nome: "igor", idade: 15}

let alunoB = { ...alunoA }

alunoB.idade = 25