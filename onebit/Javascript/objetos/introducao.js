let spaceship = { //criando o objeto e as suas propriedades
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

let newObject = {}  //objeto pode ser criado vazio tambem
//ou
let newObject2 = new Object()


console.log(spaceship) //chama todas as propriedades do objeto

console.log(spaceship.name) //chama so a propriedade do objeto

console.log(spaceship["type"]) //outra forma de chamar a propriedade


//adicionar nova propriedade:

spaceship.isHitched = false
//ou:
spacehip["shieldLevel"] = 100


//......................................................................


