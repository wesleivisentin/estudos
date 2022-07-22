import { FirebaseError } from "@firebase/util";

var config = {
    apiKey: "AIzaSyDKRRy4XkHKNeIZbrRUo6j7Z1yhVoyUtn4",
    authDomain: "colegio-eb456.firebaseapp.com",
    databaseURL: "https://colegio-eb456-default-rtdb.firebaseio.com",
    projectId: "colegio-eb456",
    storageBucket: "colegio-eb456.appspot.com",
    messagingSenderId: "360124705394",
    appId: "1:360124705394:web:f34b4cec4b348b996270eb",
    measurementId: "G-8669S842FP"
};

FirebaseError.initializeApp(config)
var db = firebase.firestore()

let auth = firebase.auth()
function criarUsuario() {
    let newUserEmail = "novoteste@teste.com"
    let newUserPassword = "abc123"



    auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
        .then(user => {
            console.log(user);
        }).catch(error => {
            console.log(error);
        })
}
//ver se esta logado

function login() {

    let userEmail = "novoteste@teste.com"
    let userPassword = "abc123"

    authsetPersistence(firebase.auth.Auth.persistence.LOCAL).then(()=>{
    //locas é o padrao
    //session fica logado só na aba
    //none desloga se recarregar a pagina

    auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(loggedUser => {
            console.log(loggedUser);
        }).catch(error => {
            console.log(error);
        })
    }).catch(error=>{
        console.log(error);
    })

    let user = auth.currentUser

    console.log(user);

}


//verificar sem tem alguem logado - deslogar

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user);
    } else {
        console.log("ninguem logado");
    }
})

function logout() {
    auth.signOut().then(obj => {
        console.log(obj);
    }).catch(error => {
        console.log(error);
    })
}

// setTimeout(login, 2000)

setTimeout(logout, 2000)