// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32


// function reverterCemF(c){

//     let fahrenheit = c * 9/5 + 32
//     console.log(`${c} C° em fahrenheit é igual à ${fahrenheit} F °` );



   
// }

// reverterCemF(10)



///////////////

function transformDegree(degree) {
    const celsiusExists= degree.toUpperCase().includes('C')
    const fahrenheitExists= degree.toUpperCase().includes('F')

    if(celsiusExists) {
       let transformC = Number(degree.toUpperCase().replace("C","")) * 9/5 + 32
       console.log(`${degree} convertido em fahrenheit fica: ${transformC} F°`);
    }else if(fahrenheitExists) {
        let transformF = (Number(degree.toUpperCase().replace("F","")) -32) *  5/9
       console.log(`${degree} convertido em Celcius fica: ${transformF} C°`);
    } else if(!celsiusExists && !fahrenheitExists) {
        throw new Error("Erro, Digite um valor válido ");
    }
    

    
}




try {
    transformDegree("10c")
    transformDegree("50f")
    transformDegree("50z")
} catch (error) {
    console.log(error.message);
}





// transformDegree("g")