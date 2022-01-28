let spaceship = { //objeto
    name: "Supernova",
    type: "batalha",
    crew: ["Cap. Silva", "Ana Júlia", "Thiago"]//array dentro do objeto
}

//adicionar integrande na crew:

spaceship.crew.push("ten. Fernanda") //usado o metodo push de array para add
console.log(spaceship)

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// criar array com lista de objetos

let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 8},
    {name: "Helmet", crewQuantity: 15}
]

//pegar nome da nave do primeiro objeto

console.log(spaceships[0].name)

// imprimir nave por nave nome e tripulantes

spaceships.forEach(element => {
    console.log(element.name + " tem " + element.crewQuantity + " tripulantes.")
});


//----------------------------------------------------------
//----------------------------------------------------------
//objeto dentro de objeto:

let spaceshipp = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent",
        age: 37
    }
}

//executar o nome do capitão(obj dentro do obj)

console.log(spaceshipp.captain.name)