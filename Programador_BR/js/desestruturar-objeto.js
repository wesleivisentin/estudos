var aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 54991094519,
    cidade: "Barra do piraí"
}


// var {matricula, nome} = aluno
var {...copia} = aluno

console.log(copia)
console.log(aluno);


