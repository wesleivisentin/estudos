import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = initializeApp( {
  apiKey: "AIzaSyDKRRy4XkHKNeIZbrRUo6j7Z1yhVoyUtn4",
  authDomain: "colegio-eb456.firebaseapp.com",
  databaseURL: "https://colegio-eb456-default-rtdb.firebaseio.com",
  projectId: "colegio-eb456",
  storageBucket: "colegio-eb456.appspot.com",
  messagingSenderId: "360124705394",
  appId: "1:360124705394:web:f34b4cec4b348b996270eb",
  measurementId: "G-8669S842FP"
});

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = firebase.firestore();

db.collection("colegio").get().then((snapshot)=>{

      snapshot.forEach((doc)=>{
        console.log(doc)
      })
    })