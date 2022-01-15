let oldName = prompt("qual nome da pessoa mais velha? ")
let oldAge = prompt ("qual a idade da pessoa mais velha? ")
let newName = prompt("qual nome da pessoa mais nova? ")
let newAge = prompt ("qual a idade da pessoa mais nova? ")
let difference = (oldAge - newAge)
alert(oldName + " de " + oldAge + " anos, é a pessoa mais velha. \n" + newName + " de " + newAge + " anos, é a pessoa mais nova. \n"
+ "elas tem " + difference + " anos de diferença.")
