import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBi_cLEZIdXNkiVlRIVKFtxNDtI9ipn9nA",
  authDomain: "crwn-db-f39f6.firebaseapp.com",
  projectId: "crwn-db-f39f6",
  storageBucket: "crwn-db-f39f6.appspot.com",
  messagingSenderId: "780036656229",
  appId: "1:780036656229:web:93a158e7051e8a0f94ca8c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
