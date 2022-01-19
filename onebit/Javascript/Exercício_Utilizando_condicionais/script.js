let namePilot = prompt("Qual o seu nome piloto?")

let velocityStart = 0

let velocityOption = prompt ("a qual velocidade gostaria de acelerar?")

let confirmation = confirm("tem certeza que quer acelerar para " + velocityOption + " km/s?")


if (confirmation) {
    velocityStart = velocityOption
  
}
   

alert ("subindo velocidade para " + velocityStart + " km/s")

//diferentes tipos de velocidades

if (velocityStart <= 0){
    alert("nave está parada. Considere partir e aumnetar a velocidade")
}
else {
    if (velocityStart < 40){
        alert("Voce es´ta devagar, podemos aumentar mais")
    }
}