let usuarios = ["Adriano", "Marcia", "José"]


function inserirUsuario(nome, callback) {

    setTimeout(() => {
        usuarios.push(nome)
        callback()
    }, 1000)
}

function listausuarios() {
    console.log(usuarios)
}

inserirUsuario("Weslei", listausuarios)