//codigo nao funciona

class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsleft = 5
    }

    shoot() {
        if(this.shotsleft > 0){
        console.log("bang!")
        this.shotsLeft -= 1
        } else {
            throw new Error("Arma " + this.identifier + " sem munição");
        }
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon)