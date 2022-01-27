let spaceship = { //criando o objeto e as suas propriedades
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

console.log(spaceship) //chama todas as propriedades do objeto

console.log(spaceship.name) //chama so a propriedade do objeto

console.log(spaceship["type"]) //outra forma de chamar a propriedade


//adicionar nova propriedade:

spaceship.isHitched = false
//ou:
spacehip["shieldLevel"] = 100

