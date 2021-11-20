fun main() {
    for(i in 0..20){
        print("$i")
    }
}

fun downTo() {
    for (i in 20 downTo 0){
        print("$i")
    }
}

fun until(){
    for(i in 1 until 20){
        print("$i ")
    }
}

for step(num:Int) {
    for(i in 0.. 20 step num){
        print("$i ")
    }
}
