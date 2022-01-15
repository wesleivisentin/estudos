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

let name = prompt("qual seu nome?")
console.log(name)
let idade = prompt("qual a sua idade?")
console.log(idade)


let confirma = confirm("tem certeza que tem " + idade + " anos?")
console.log(confirma)

alert("seu nome é "+ name + ", você tem " + idade + " anos. confirmação de idade: " + confirma)