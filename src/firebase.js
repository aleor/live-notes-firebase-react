import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDuVJBwLc6kIS8ri_OZLB6qrcV_DdK7pR0",
  authDomain: "live-notes-49852.firebaseapp.com",
  projectId: "live-notes-49852",
  storageBucket: "live-notes-49852.appspot.com",
  messagingSenderId: "248876370595",
  appId: "1:248876370595:web:68a2557132def0ae38cd16",
  measurementId: "G-BK0G4NM456",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user profile", error);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user profile", error);
  }
};

export default firebase;
