 var numero = 5 

 for(var vez = 0; vez < numero; vez++)  {
    console.log("executando o for " + vez)

 }

 console.log("acabou")


 ////////////////////////////////////////////////

 var alunos = ["joao", "Weslei", "Daniela", "Uriel", "Jubileu"]

 for (var i in alunos) {  // in poe o valor index de alunos dentro do i
    console.log(alunos[i])
 }


 for (var aluno of alunos) {  // of pega os elementos da array em vez do index como o in faz
    console.log(aluno)
 }