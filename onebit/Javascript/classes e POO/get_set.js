class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }
    set velocity(newVelocity) {
        if(newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }

    }
}

let spaceship = new TransportSpaceship("transportador")

spaceship.velocity = 130

console.log(spaceship)



//   get

class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad){
        this.name = name
        TouchList.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weklyrPocessedload() {
        return this.monthlyProcessedLoad / 4
    }
}
let resourceProcessor = new ResourceProcessStation("Gaia", 500)

console.log(resourceProcessor.weklyrPocessedload)