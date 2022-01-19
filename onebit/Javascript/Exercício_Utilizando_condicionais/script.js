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
else if (velocityStart > 0 & velocityStart < 40){
        alert("Voce está devagar, podemos aumentar mais")
    }
    else if (velocityStart >= 40 & velocityStart < 80) {
        alert("parece uma boa velocidade para manter")
    }
        else if (velocityStart >= 80 & velocityStart < 100) {
            alert("Velocidade muito alta, considere diminuir. ")
        }
        else  {
            alert ("velocidade perigosa.Controle automático forçado.")
        }

alert(namePilot+ " sua velocidade atual é de: "+ velocityStart + " km/s.")