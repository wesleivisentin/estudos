class ResorceProcessorStation {
constructor(name,monsthlyProcessing) {
    this.name = name
    this.monsthlyProcessing = monsthlyProcessing
}

static calculateProcessInHours(monsthlyProcessing, hours) {
    return monsthlyProcessing / 720 * hours
}
}

let totalProcessing = ResorceProcessorStation.calculateProcessInHours(500,6)

console.log(totalProcessing)

let processor = new ResorceProcessorStation("gaia", 2000)

let totalprocessed = ResorceProcessorStation.calculateProcessInHours(processor.monsthlyProcessing, 10)

console.log(totalprocessed)
