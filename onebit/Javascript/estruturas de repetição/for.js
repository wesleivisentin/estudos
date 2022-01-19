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