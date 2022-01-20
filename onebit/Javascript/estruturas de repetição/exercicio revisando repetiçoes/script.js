let nameSpaceship = prompt("qual o nome da nave?")
let nameSecret = ""

for(let i = nameSpaceship.length -1; i >= 0; i-- ){
    if(nameSpaceship[i] == "e"){
    break
    }else
    nameSecret += nameSpaceship[i]
}
alert("Nome original da nave: " + nameSpaceship + "\nNome após ocultação: " + nameSecret)