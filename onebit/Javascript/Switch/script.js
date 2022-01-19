let velocity = 80

switch(velocity * 2){//faz ir caso a caso
    case 100:
        console.log("sua velocidade é de 100 km/s")
        break
    case 160:
        console.log("sua velocidade é 160 km/s")
        break //faz parar depois de executar
    default: //serve para quando não encontra opçao nenhuma
        console.log("velocidade não identificada")
}


let velocityy = 90
 switch(velocityy){
    case 80:
    case 90: //ele começa quando acha o correto e continua até um break
    case 100:
        console.log("Velocidade aceitavel")
        break
    case 110:
        console.log("velocidade alta, mas aceitavel") 
        break
    default:
        console.log("velocidade não identificada")                       
}

//pode ser usado com string tambem

let spaceship = "elemental"

switch(spaceship) {
    case "Golias":
        console.log("nave mais resistente")
        break
    case "elemental":
        console.log("nave com melhor armamento")
        break
    default:
        console.log("nave comum")        
}