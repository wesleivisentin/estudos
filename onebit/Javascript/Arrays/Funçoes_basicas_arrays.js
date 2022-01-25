let naves = ["Colossus", "Elemental", "Helmet"]

console.log(naves)

naves.push("Supernova") // adiciona um item na lista

console.log(naves)

naves.pop() //retira ultimo elemente se não especificado


let removeNave = naves.pop() //para retornar depois o item retirado
console.log(removeNave)

let removeNave2 = naves.shift() //remove 1 item da lista 
console.log(removeNave2)