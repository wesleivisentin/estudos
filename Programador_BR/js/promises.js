let usuarios = ["Adriano", "Marcia", "José"]


function inserirUsuario(nome) {


        let promise = new Promise(function(resolve,reject) {

            setTimeout(() => {
                usuarios.push(nome)

                    let error = false;

                    if(!error){
                        resolve()
                    } else {
                        reject({ msg: "erro de qualquer coisa"})
                    }
                
            }, 1000) 

        })

        return promise




    
}

function listausuarios() {
    console.log(usuarios)
}

// inserirUsuario("Weslei").then(listausuarios)
// .catch((erro) => { console.log("Aconteceu um erro: " + erro.msg)})


async function executar() {

    await inserirUsuario("Weslei")
    listausuarios()
}
executar()