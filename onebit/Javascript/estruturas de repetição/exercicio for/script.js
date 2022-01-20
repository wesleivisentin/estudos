let nameSpaceship = prompt("Qual o nome da nave?")
let substitute = prompt("qual o caractere que deseja subtituir?")
let substitute2 = prompt("por qual letra quer substituir?")
let newSpaceship= ""
console.log(nameSpaceship, substitute, substitute2)

for(let posicao= 0; posicao < nameSpaceship.length; posicao++ ){
    if(nameSpaceship[posicao] == substitute){
        newSpaceship += substitute2
    }else{
        newSpaceship += nameSpaceship[posicao]
    }


}
alert("O novo nome da nave é: " + newSpaceship)
