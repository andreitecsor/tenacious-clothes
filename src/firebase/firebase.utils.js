import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBOaZBBKbajjmPDrgdioAWLLH0Nb33pFt8",
    authDomain: "tenacious-clothes.firebaseapp.com",
    projectId: "tenacious-clothes",
    storageBucket: "tenacious-clothes.appspot.com",
    messagingSenderId: "594656229789",
    appId: "1:594656229789:web:7c2f0dd6dea649eb461774",
    measurementId: "G-QX8MRCMXTQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

