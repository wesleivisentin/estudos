let nameSpaceship = prompt("Qual o NOME da sua nave?")
let typeSpaceship = prompt("Qual o TIPO da sua nave?")
let velocityMaxSpaceship = prompt ("Qual e velocidade Maxima da sua nave?")
let velocityNow = 0

function newVelocity() {
    velocityNow = velocityNow += parseInt(acelerattion)
    if(velocityNow > velocityMaxSpaceship){
        alert("ATENÇÃO!!!\nVelocidade Máxima de " + velocityMaxSpaceship + "km/s atingida")
        alert("Parada de emergencia ativada")
        velocityNow = (velocityMaxSpaceship / 2)
        alert("velocidade reduzida pela metade.")
    }
    
}

let nave = {
    name: nameSpaceship,
    type: typeSpaceship,
    velocity: velocityMaxSpaceship

}
function question(){
 whatToDoNow = prompt("o que deseja fazer agora?\n[1] Acelerar\n[2] Parar")
}

question()
while(whatToDoNow == 1 || 2){
if (whatToDoNow == 1){
    acelerattion = prompt("quanto você quer acelerar?")
    newVelocity()
    alert("Sua velocidade atual é de "+ velocityNow + "km/s")
    question()

}
else if(whatToDoNow == 2){
    alert("Saindo...")
    break
}
else {
    alert("digitos invalidos...digite apenas 1 ou 2. ")
    question()
}
}

alert("nome da nave: " + nave.name + "\nTipo da nave: " + nave.type + "\nVelocidade máxima: "+ nave.velocity + "km/s" + "\nÚltima velocidade registrada: " + velocityNow + "km/s")


