// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInAnonymously, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByWB_Gee6vKFV46h5yKBzGPnE3dYJdUkU",
  authDomain: "dummy-f9074.firebaseapp.com",
  databaseURL: "https://dummy-f9074-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "dummy-f9074",
  storageBucket: "dummy-f9074.appspot.com",
  messagingSenderId: "766168577522",
  appId: "1:766168577522:web:c15fd61e5a0477a3db676b",
  measurementId: "G-5L21BY8EQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
const auth = getAuth(app);
export {auth}

export function signUp (email, password){
    createUserWithEmailAndPassword(auth, email, password);
}

export function login (email, password){
    signInWithEmailAndPassword(auth, email, password);
}

export function logOut (){
    return signOut(auth);
}

export function useAuth (){
    const [currUser, setCurrUser] = useState();

    useEffect (()=> {
        const unsub = onAuthStateChanged(auth, user => setCurrUser(user));
        return unsub;
    }, [])

    return currUser;
}