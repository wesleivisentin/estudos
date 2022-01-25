
//>>>>>>>>>>>>>>>>>>>>>  SPLICE  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
let spaceshipNames = ["Elemental", "Darwin", "Àrtemis", "Supernova"]

let removedSpaceships = spaceshipNames.splice(1, 2, "Deméter", "Puller", "Golias")
//splice vai para a posiçao 1, remove 2 elementos a partir dela(remove posição 1 e 2 e vai acrecentar no lugar dos dois os proximos parametros)

console.log(spaceshipNames)
console.log(removedSpaceships)


//>>>>>>>>>>>>>>>>>>>>>  SLICE  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

let spaceshipNames2 = ["Elemental", "Darwin", "Àrtemis", "Supernova"]

let extractedNames = spaceshipNames2.slice(0, 2)

console.log(spaceshipNames2)
console.log(extractedNames)