let nameNave = prompt("qual o nome da sua nave?")

let enterDouble = confirm("Deseja entrar em dobra espacial?" )
let doubles = 0
if (enterDouble){
    doubles + 1
}
let confirmDouble
while(confirmDouble = true){
  confirmDouble = confirm("deseja realizar a proxima dobra?")
  doubles += 1
}

alert("nome da nave: " + nameNave + "\nNúmero de dobras:  " + doubles)