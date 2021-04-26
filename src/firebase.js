import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLZndldjSlPfqMNl0dYwfaJc782PRfEIw",
    authDomain: "svelte-crud-241bf.firebaseapp.com",
    projectId: "svelte-crud-241bf",
    storageBucket: "svelte-crud-241bf.appspot.com",
    messagingSenderId: "619855014390",
    appId: "1:619855014390:web:52c8e6ff4f2bbb3e177fd7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.firestore();
