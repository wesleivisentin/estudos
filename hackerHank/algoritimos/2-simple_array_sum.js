function simpleArraySum(ar) {
    let stringValue= ar.length
    let soma = 0
    for(var i = 0; i < stringValue; i++) {
        soma += ar[i];
        
    }
    return soma;
}


// segunda vez:

function simpleArraySum(ar) {
    let total = 0
    for (let i = 0; i < ar.length; i++){
        total += ar[i]
    }
    return total
}