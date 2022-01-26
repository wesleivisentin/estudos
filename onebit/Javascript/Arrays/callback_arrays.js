//forEach

let hitchedSpaceships = ["Deméter", "Darvin", "Supernova", "Fenix", "Puller"]

hitchedSpaceships.forEach(function(currentSpaceship, index){
    console.log("Nave: " + currentSpaceship + "\nÌndice: " + index)
})


//map

let upCaseSpaceships = hitchedSpaceships.map(function(currentSpaceship, index){
    let upCased = currentSpaceship.toUpperCase()
    return upCased
    
})

console.log(upCaseSpaceships)



//filter

let with7Chars = hitchedSpaceships.filter(element => {return element.length >=7})//retortnar elementos com mais de 7 letras

console.log(with7Chars)



//find

let with7Charss = hitchedSpaceships.find(element => {return element.length >=7})//retortnar 1 elementoq encontrar com mais de 7 letras

console.log(with7Charss)