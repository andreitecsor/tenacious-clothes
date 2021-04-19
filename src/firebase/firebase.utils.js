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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;

};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

