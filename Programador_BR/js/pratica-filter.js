
function addAlunos(nome, idade) {
    return {nome, idade}
}


let listaDeAlunos = [
    addAlunos("Weslei", 27),
    addAlunos("Daniela", 22),
    addAlunos("João", 33),
    addAlunos("Gustavo", 45),
    addAlunos("Pedronsa", 69)
]

function MenosQue30(alunito) {
    return alunito.idade < 30

}

function MaiorQue30(alunito) {
    return alunito.idade > 30

}


let filtroDeAlunos = listaDeAlunos.filter(MaiorQue30)

console.log(filtroDeAlunos)