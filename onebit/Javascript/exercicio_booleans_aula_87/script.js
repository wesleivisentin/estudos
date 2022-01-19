let departureDateEntry = prompt ("digite a data de partida (formato DD/MM/YYYY )")
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let datediff = today - departureDate