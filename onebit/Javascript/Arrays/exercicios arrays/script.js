const hitchedSpaceships = [
    ["Fenix", 8, true], 
    ["Golis", 10, true], 
    ["Helmet", 5, false], 
    ["Element", 3, true], 
    ["darwin", 15, false] 
]



let maioresque9 = hitchedSpaceships.filter(callback => {
    return callback[1] > 9   //filtra para todos maior q 9 tripulantes
}).map(callback => {
    return callback[0] //faz aparecer so o indice 0(nome da nave)
})

console.log(maioresque9)

let navesNaPlataforma = hitchedSpaceships.findIndex(callback => {
    return callback[2] == false
})

//deixar caixa alta

let navesCaixaAlta = hitchedSpaceships.map(callback => {
    return callback[0].toUpperCase()
})

console.log(navesCaixaAlta)

let mensagem = "Naves com mais de 9 tripulantes: " + maioresque9.join(", ")
mensagem += "\nPlataforma com processo de engate: " + (navesNaPlataforma + 1)
mensagem += "\nNaves destacadas: " + navesCaixaAlta.join(", ")

console.log(mensagem)