function getScore(nota){

let notaDoAluno = nota
let notaA = notaDoAluno >= 90 && notaDoAluno <= 100
let notaB = notaDoAluno >= 80 && notaDoAluno <= 89
let notaC = notaDoAluno >= 70 && notaDoAluno <= 79
let notaD = notaDoAluno >= 60 && notaDoAluno <= 69
let notaF = notaDoAluno < 60
    

if (notaA){
  console.log("nota A")
} 

else if(notaB )
{
  console.log("nota B")
} 

else if(notaC)
{
  console.log("nota C")
} 


else if(notaD)
{
  console.log("nota D")
}


else if(notaF) {
  console.log("nota F")
} else {
  console.log("nota inválida");
}

}


getScore(59)