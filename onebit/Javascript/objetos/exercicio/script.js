let nameSpaceship = prompt("Qual o NOME da sua nave?")
let typeSpaceship = prompt("Qual o TIPO da sua nave?")
let velocityMaxSpaceship = prompt ("Qual e velocidade Maxima da sua nave?")

let nave = {
    name: nameSpaceship,
    type: typeSpaceship,
    velocity: velocityMaxSpaceship

}

let whatToDoNow = prompt("o que deseja fazer agora?\n[1] Acelerar\n[2] Parar")

if (whatToDoNow == 1){
    let acelerattion = prompt("quanto você quer acelerar?")
}
else if(whatToDoNow == 2){

}