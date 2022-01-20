function speedUp(velocity, unit= "km/s" , acceleration){
    let newvelocity = velocity + acceleration
    alert("Nova velocidade: " + newvelocity + unit)
}

speedUp(50,20) // vai dar error pq unit vai receber 20

speedUp(50, "m/s", 20 )// esse vai dar bom