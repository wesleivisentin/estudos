class Spaceship{
    constructor(name, maxCrew, maxRecommendedValue) {
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedValue = maxRecommendedValue
        this.currentVelocity = 0
    }
    speedUp(accleration){
        this.currentVelocity += accleration
        if(this.currentVelocity > this.maxRecommendedValue) {
            alert("Velocidade máxima ultrapassada!\nDiminua ou poderá provocar danos à nave.")
        }

    }
}

class TransportSpaceship extends Spaceship{
    constructor(name, maxCrew, masRecommendedValue, maxLoadWeight){
    super(name, maxCrew, masRecommendedValue) // chama o constructor do Spaceship
    this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration){
        acceleration /= 2
        alert("incrementando velocidade em " + acceleration + "Km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("transportadora", 4, 100, 400)

console.log(transportSpaceship)
transportSpaceship.speedUp(210)