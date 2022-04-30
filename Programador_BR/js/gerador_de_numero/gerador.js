




let pessoas = ["Igor", "Weslei", "Daniela", "Uriel", "Silvana", "Leonardo"]



function sortear() {
    let np = /*100*/ pessoas.length

    let ns = Math/*.round*/.floor(Math.random() * np)

    document.getElementById("display").innerHTML = pessoas[ns] /*ns*/
}