let nameNave = prompt("qual o nome da nave? ")

let velocityStart = 0
let acceleration = 5
let velocityAtual = 0
let option = ""

function options(){
option = prompt("O que você deseja fazer?\n[1] Acelerar a nave em 5km/s\n[2] Desacelerar a nave em 5km/s\n[3] Imprimir dados de bordo\n[4] Sair do programa")
}

function option1(){
    velocityAtual = velocityAtual + acceleration
}
function opotion2(){
    velocityAtual = velocityAtual - acceleration
}
function option3(){
    alert("nome da nave: " + nameNave + "\nVelocidade atual: " + velocityAtual + "km/s")
}
function velocitynegative(){
    if (velocityAtual < "0"){
        velocityAtual = velocityStart
    }
}
options()
while(option == 1 || 2 || 3 || 4){
if (option == "1"){
    option1()  
    options()  
}
else if(option == "2") {           
    opotion2()
    velocitynegative()
    options()
}
else if (option == "3") {
    option3()
    options()
}
else if (option == "4") {
    alert("Saindo do programa...")
    break
}
            
else{
     alert("digite um valor válido")           
     options()
}
}

alert("nome da nave: " + nameNave + "\nVelocidade atual: " + velocityAtual + "km/s")