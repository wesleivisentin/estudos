//quando a propriedade tem uma funçao...éla é chamada de metodo

let spaceship = {
    name: "demeter",
    type: "extração",
    maxCrew: 20,
    turnON: function() {
        console.log("preparando propulção")
        console.log("Ligando computador de bordo")
    }
}

//chamando a função

spaceship.turnON()

//add mais uma propriedade:
spaceship.velocity = 0

//add mais uma funçao:
spaceship.outraFuncao = function(acceleration) {
    this.velocity += acceleration
}
console.log(spaceship)

spaceship.outraFuncao(10)

console.log(spaceship)


//this para referenciar o proprio objeto