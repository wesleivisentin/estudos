class SpacialStation {
    constructor(name, platformsQuantity) {
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let obervatory = new SpacialStation("Observatorio", 40)

console.log(obervatory)

let observatory2 = new SpacialStation("observatorio falido", 1)

console.log (observatory2)

console.log(SpacialStation)

//----
class Spaceship {
    constructor(myName, type = "Descoberta"){
        this.name = myName
        this.type = type
    }
}
let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("helmet", "Batalha")

console.log(darwin)
console.log(helmet)