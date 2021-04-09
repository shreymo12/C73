import * as firebase from 'firebase'
require ('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4FtKDWfOWcmM31HifQBmPiTk0Z7ApJv4",
    authDomain: "willy-57481.firebaseapp.com",
    projectId: "willy-57481",
    storageBucket: "willy-57481.appspot.com",
    messagingSenderId: "131055906853",
    appId: "1:131055906853:web:bfe0b17bf64969ef314fcc",
    measurementId: "G-2PFLQMCRZY"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();