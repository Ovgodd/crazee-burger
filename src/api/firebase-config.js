import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIufh1yrcyXiE3i-7McworlBBUcjWOwB4",
  authDomain: "crazee-burger-project-9e954.firebaseapp.com",
  projectId: "crazee-burger-project-9e954",
  storageBucket: "crazee-burger-project-9e954.appspot.com",
  messagingSenderId: "702239542490",
  appId: "1:702239542490:web:b640c9846513c4dccde9e3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // pour se connecter à notre compte firebase
export const db = getFirestore(app); //pour se connecter à notre BDD Firestore ( y faire référence )
