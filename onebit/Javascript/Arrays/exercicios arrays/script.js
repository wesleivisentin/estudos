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