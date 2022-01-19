let distancy = prompt("qual a distancia em anos-luz?")

let conversion = prompt("para conversão temos as seguintes opções:\n[1]-  Parsec(pc)\n[2]-  Unidade astronômica(AU)\n[3]-  Quilômetros(km)\nDigite o numero da opção que deseja:")
/*
1 l.y. = 0,306601 pc
1 l.y. = 63241,1 AU
1 l.y. = 9,5 * 10^12 km
*/
switch(conversion){
    case 1:
        let distConver = (distancy * 0,306601)
        alert("Distancia em anos-luz:")
        break
    
    case 2:
        distancy * 63241,1
        break

    case 3:
        distancy * Math.pow(10, 12)
        break
    default:
        alert("Distancia em anos-luz: " + distancy + "\nUnidade não identificada:Conversão fora do escopo")    

}