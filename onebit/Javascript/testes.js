console.log("olá mundo!")

alert("hello world")

confirm("ok") //confirm ou cancel

prompt("mensagem com input")

//let

let spaceship = "ola"
console.log(spaceship)
spaceship = "ahammm"
console.log(spaceship)


//const

const squad = "Estelar"
console.log(squad)
squad = "Espacial" //gera erro
console.log(squad)

//var
var velocity = 80
console.log(velocity)
velocity = 25
console.log(velocity)


//prompt
let pilot = prompt("qual o seu nome piloto?")
console.log(pilot)  //pilot recebe o valor digitado 

//exercicio pedir dados e mostrar:

alert("bem-vindo! a seguir pediremos que informe alguns dados.")

let nome = prompt("qual seu nome?")
console.log(nome)
let idade = prompt("qual a sua idade?")
console.log(idade)


let confirma = confirm("tem certeza que tem " + idade + " anos?")
console.log(confirma)

alert("seu nome é "+ nome + "\n você tem " + idade + " anos.\n confirmação de idade: " + confirma)


let uuuuuuuuu = "elemental"
let velocityy = 20

console.log(uuuuuuuuu.lenght == 9 && velocityy > 15)


// if e else
let velocity = 205
if(velocity < 100) {
  console.log("estamos muito devagar")
}
else{
  if(velocity > 100 & velocity < 200) {
  console.log("estamos em um velocidade aceitavel")
}else{
  console.log("aaaaa")
}
}


// else if
let velocity = 40
if(velocity < 100) {
  console.log("estamos muito devagar")
}
else if(velocity > 100 & velocity < 200) { // melhor assim
  console.log("estamos em um velocidade aceitavel")
}else{
  console.log("aaaaa")
}

//if de uma linha...operador ternario (só para expressoes e blocos pequenos)
(velocity > 100) ? console.log("velocidade maior que 100") : console.log("velocidade menor que 100")

