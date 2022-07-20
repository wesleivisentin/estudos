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



  let newUserEmail = "novoteste@teste.com"
  let newUserPassword = "abc123"

  let auth = firebase.auth()

  auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then(user=> {
        console.log(user);
    }).catch(error => {
        console.log(error);
    })