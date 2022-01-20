//trocar uma letra por outra coisa ou outra letra
let spaceship = "helmet"
let newSpaceship = ""

for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == "e") {
        newSpaceship += "*"
    } else {
        newSpaceship += spaceship[i]
    }
}
console.log(newSpaceship)



//usando o BREAK

let spaceshipName = "Supernova"
for(let i = 0 ; i < spaceshipName.length; i++){
    if(spaceshipName[i] == "o"){
    break    
    }
    console.log(spaceshipName[i])
}