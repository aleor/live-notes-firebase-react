import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDuVJBwLc6kIS8ri_OZLB6qrcV_DdK7pR0",
    authDomain: "live-notes-49852.firebaseapp.com",
    projectId: "live-notes-49852",
    storageBucket: "live-notes-49852.appspot.com",
    messagingSenderId: "248876370595",
    appId: "1:248876370595:web:68a2557132def0ae38cd16",
    measurementId: "G-BK0G4NM456"
  };

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();

  window.firebase = firebase;

  export default firebase;