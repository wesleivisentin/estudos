let contas = {
    receitas: [5565,44,56],
    despesas: [356,423,56]
}


function sum(array){
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateReceitas = sum(contas.receitas)
    const calculateDespesas = sum(contas.despesas)
    
    const total = calculateReceitas - calculateDespesas

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }
    console.log(`Seu salto é ${balanceText}:R$ ${total}`);
}



calculateBalance()