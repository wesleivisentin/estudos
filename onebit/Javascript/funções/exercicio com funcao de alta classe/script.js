
let velocityActual = 150

function desacelerar(velocity,callback){
    let diminuir = 20
    

    while(velocity > 0){
        callback(velocity)
        velocity -= diminuir
    }
    alert("nave parada, abrindo comportas....")
}



 desacelerar(velocityActual, function(velocity){
     alert("a velocidade atual é de: " + velocity + "km/s.")
 })

























/*

let patrimonio = 2500

function meuPatrimonio(dinheiroConta, callback){
    let desvaloriza = 100
    while(dinheiroConta >= 0){
        callback(dinheiroConta)
        dinheiroConta -= desvaloriza
    }
    console.log("você Faliu!!!")
}

meuPatrimonio(patrimonio, function(dinheiroConta){
    console.log("você agora tem " + dinheiroConta + " reais.")
})

*/


























