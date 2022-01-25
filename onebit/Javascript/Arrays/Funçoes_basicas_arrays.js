let naves = ["Colossus", "Elemental", "Helmet"]

console.log(naves)

naves.push("Supernova") // adiciona um item na lista
naves.unshift("fenix") // adiciona elemento no começo

console.log(naves)

naves.pop() //retira ultimo elemente se não especificado


let removeNave = naves.pop() //para retornar depois o item retirado
console.log(removeNave)

let removeNave2 = naves.shift() //remove 1 item da lista 
console.log(removeNave2)

console.log(naves.length)// imprime tamanho da array


//imprimir a localização de um elemento

let localElemento = naves.indexOf("Elemental")
console.log(localElemento)