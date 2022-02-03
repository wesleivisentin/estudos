/* nave - 
nome , 
quantidade, 
engatada(s/n) , 
portas abertas ou nao

*/
let novaNave
let listaDeNaves =[]
class Station {
    constructor(name, quantity,engate = "sim", portas = "abertas" ){
        this.nome = name
        this.tripulantes = quantity
        this.engate = engate
        this.portas = portas

    }
}
function printNaves(callback) {
    let spaceshipList = ""
    callback.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.nome + " (" + spaceship.tripulantes + " Tripulantes)\n"
    })
    alert(spaceshipList)
}

let question = 0
function questions(){
question = prompt("O que você deseja fazer?" + "\n[1] - Para realizar engate" + "\n[2] - Para imprimir naves" + "\n[3] - Sair do programa!")
}
questions()
while(question == 1 || 2 || 3) {
    if(question == 1){
        let nome1 = prompt("CADASTRO DE NAVE\nQual o nome da nave?")
        let tripulantes1 = prompt("qual o número de tripulantes?")
       
        novaNave = new Station(nome1, tripulantes1)
        listaDeNaves.push(novaNave)
        questions()
    }
    else if(question == 2){
        printNaves(listaDeNaves)
        questions()
    }
    else if(question == 3){
        alert("Saindo do programa...")
        break
    }
    else{
        alert("digitos invalidos, digite apenas 1, 2 ou 3")
        questions()
    }
}

console.log(listaDeNaves)