let departureDateEntry = prompt ("digite a data de partida (formato DD/MM/YYYY )")
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida \n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if (chosenOption == 1){
    let secondsofDeparture = Math.round(dateDiff / 1000)
}