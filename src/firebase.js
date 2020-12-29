import React from 'react';
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBG2KQC84zLLfRr29z8dT87qfw17gKtlzA",
    authDomain: "mailclone-a014b.firebaseapp.com",
    projectId: "mailclone-a014b",
    storageBucket: "mailclone-a014b.appspot.com",
    messagingSenderId: "250924189540",
    appId: "1:250924189540:web:bed6d3dc419cd291d21c71",
    measurementId: "G-H0W11Z0CSL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore(); 
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider}