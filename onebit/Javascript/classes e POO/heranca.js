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

//herdar de uma outra claase:
class BattleSpaceship extends Spaceship{
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship{
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo equipamento de amostras e parando nave de descoberta")
    }
}

//usando a funçao com dados herdados 
let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)

console.log(darwin)
console.log(fenix)

darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()