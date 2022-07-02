let nome = ""


try {


    if(nome === ""){
        throw "o nome nao pode ser vazio" //throw = exeçao
    }


    console.log(nome);
} catch (err) {
    console.log("erro encontrado:", err);
} finally {
    console.log("boa noite")
}





// console.log("boa noite")