/* nave - 
nome , 
quantidade, 
engatada(s/n) , 
portas abertas ou nao

*/

class Station {
    constructor(name, quantity){
        nome = name
        tripulantes = quantity
        engate = "sim"
        portas = "abertas"

    }
}
let question = 0
function questions(){
question = prompt("O que você deseja fazer?" + "\n[1] - Para realizar engate" + "\n[2] - Para imprimir naves" + "\n[3] - Sair do programa!")
}
questions()
while(question == 1 || 2 || 3) {
    if(question == 1){
        this.nome = prompt("CADASTRO DE NAVE\nQual o nome da nave?")
        this.tripulantes = prompt("qual o número de tripulantes?")
        questions()
    }
    else if(question == 2){
        alert("Lista de naves:")
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