function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity)
    return newVelocity
}


//invez disso
 let velocity = 80
 let acceleration = 5

 console.log(velocity)

 velocity = speedUp(velocity, acceleration)

 console.log(velocity)

 //da para usar apenas:
speedUp(80, 5)