import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCr3v1icE1pJBu1zkoRPkqaNSfAnb78iOo",
    authDomain: "booking-app-db790.firebaseapp.com",
    databaseURL: "https://booking-app-db790.firebaseio.com",
    projectId: "booking-app-db790",
    storageBucket: "booking-app-db790.appspot.com",
    messagingSenderId: "371983798817",
    appId: "1:371983798817:web:e6a50684632489f78d8960",
    measurementId: "G-D6WP9LCTSQ"
  };

  const app  = firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore(app);