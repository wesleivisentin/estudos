class Spaceship {
    constructor(name){
        this.name = name
        this.velocity = 0
    }
    speedUp(acceleration){ //método
        this.velocity += acceleration
    }

}

let artemis = new Spaceship("Ártemis")

console.log(artemis)

//chamar o metodo speedUp para acelerar essa nave criada agora

artemis.speedUp(10) //add 10
artemis.speedUp(15) //add + 15

console.log(artemis) //vai imprimir velocidade 25