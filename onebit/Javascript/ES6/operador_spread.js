let spaceships = ["Colossus", "Ártemis", "Fenix"]

console.log(...spaceships)  // spread: ...  imprime o array como strings separadas


let newSpaceships = [...spaceships, "Puller"]

console.log(newSpaceships)


//////////////////////////////////////

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

let spaceshipAcceleration = [60, 10]

let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)