const questions = [
    "O que aprendi hj?",
    "bla bla 1",
    "bla bla 2",
    "bla bla 3",
    "bla bla 4",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()


const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }else {
        console.log(answers);
        process.exit()
    }
})