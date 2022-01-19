/* exercicio que eu fiz



let nameNave = prompt("qual o nome da sua nave?")
let confirmDouble
let enterDouble = confirm("Deseja entrar em dobra espacial?" )
let doubles = 0
if (enterDouble){
    doubles + 1
    confirmDouble = true
}

while(confirmDouble == true){
  confirmDouble = confirm("deseja realizar a proxima dobra?")
  doubles += 1
}

alert("nome da nave: " + nameNave + "\nNúmero de dobras:  " + doubles)


*/


//exercicio correto
let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)