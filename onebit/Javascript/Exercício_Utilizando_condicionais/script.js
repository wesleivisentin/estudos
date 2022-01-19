let namePilot = prompt("Qual o seu nome piloto?")

let velocityStart = 0

let velocityOption = prompt ("a qual velocidade gostaria de acelerar?")

let confirmation = confirm("tem certeza que quer andar a " + velocityOption + " ?")


if (confirmation) {
    velocityStart = velocityOption
  
}
   

alert ("é" + velocityStart)