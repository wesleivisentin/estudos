let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false
}

let {name: spaceshipName, crewQuantity: crewQuantity } = spaceship
// OU :  
//let {name: spaceshipName, crewQuantity} = spaceship



/*   ANTES:
let spaceshipName = spaceship.name
let crewQuantity = spaceship.crewQuantity
*/
console.log(spaceshipName, crewQuantity)