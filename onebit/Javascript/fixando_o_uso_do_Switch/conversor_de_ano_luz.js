let distancy = prompt("qual a distancia em anos-luz?")

let conversion = prompt("para conversão temos as seguintes opções:\n[1]-  Parsec(pc)\n[2]-  Unidade astronômica(AU)\n[3]-  Quilômetros(km)\nDigite o numero da opção que deseja:")
/*
1 l.y. = 0,306601 pc
1 l.y. = 63241,1 AU
1 l.y. = 9,5 * 10^12 km
*/
let chosenunity
let convertedDistance

switch(conversion){
    case "1":
        chosenunity = "Parsec"
        convertedDistance = (distancy * 0.306601)
        break
    
    case "2":
        hosenunity = "Unidade Astronômica"
        convertedDistance = (distancy * 63241.1)
        break

    case "3":
        
        hosenunity = "Quilometros"
        convertedDistance = (distancy * 9.5 * Math.pow(10, 12))
        break
    default:
        chosenunity = "Unidade não identificada"
        convertedDistance = "conversão fora do escopo"
            

}

alert("Distancia em anos-luz:" + distancy + "\n" + chosenunity + ": " + convertedDistance)