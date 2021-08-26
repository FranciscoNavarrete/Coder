import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASKE2KphUUSfNdBpJmrdwXpYTUNCk1bDU",
  authDomain: "smartcoder-30f8c.firebaseapp.com",
  projectId: "smartcoder-30f8c",
  storageBucket: "smartcoder-30f8c.appspot.com",
  messagingSenderId: "1040835869821",
  appId: "1:1040835869821:web:b2f4a4a1f10d8156618514"
  };

  const app  = firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore(app);
  