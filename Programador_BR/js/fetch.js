let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"

fetch(url).then((res)=> {
    return res.json()
})
.then((data)=> {
    console.log(data.rates.BRL);
})




/////
function converter() {
    let input = document.getElementById("valor").ariaValueMax;
    let valor = input.value
    fetch(url).then((res)=> {
        return res.json()
    })
    .then((data)=> {
        let rate = data.rates.BRL

        let resultado = `${valor} dolares = ${rate * valor} em reais`
        document.getElementById("resultado").innerHTML = resultado
    })
    
}