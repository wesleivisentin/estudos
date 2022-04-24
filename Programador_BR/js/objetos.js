
function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2
}



var aluno = {
    nome: "igor",
    notas: [7,8],
    
    media: calcMedia
    // media: function (n1, n2) {
    //     return (n1 + n2) / 2
    // }
}


var aluno1 = {
    nome: "Joao",
    notas: [7,8],
     
    media: calcMedia
    // media: function (n1, n2) {
    //     return (n1 + n2) / 2
    // }
}


console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))

console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))