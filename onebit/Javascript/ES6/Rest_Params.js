function greetCrew(message, ...names) {
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("Seja bem-vindo" , "Artur", "Jake", "Melissa")


/*
ANTES:
greetCrew("Seja bem-vindo" , ["Artur", "Jake", "Melissa"])
*/