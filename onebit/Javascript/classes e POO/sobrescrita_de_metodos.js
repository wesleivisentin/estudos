class Spaceship{
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }
    speedUp(accleration){
        this.currentVelocity += accleration
        if(this.currentVelocity > this.maxRecommendedVelocity) {
            alert("Velocidade máxima ultrapassada!\nDiminua ou poderá provocar danos à nave.")
        }

    }
}
class TransportSpaceship extends Spaceship{
    speedUp(){
        alert("naves de transporte só aumentam 1km/s ")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("transportadora", 4, 100)
transportSpaceship.speedUp()

console.log(transportSpaceship)