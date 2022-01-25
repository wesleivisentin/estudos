
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













