var pessoa = {
    nome: "José Silva",
    idade: 32
}

var contato = {
    telefone: 876595952,
    email: "Jose@gmail.com"
}

//  var copia = {...pessoa}
//  copia.idade = 88
//  console.log(pessoa);
// console.log(copia);

var copia = {...pessoa, cidade: "Rio de janeiro", ...contato}
 copia.idade = 88
 console.log(pessoa);
console.log(copia);