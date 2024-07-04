// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGZstQCZCyl5ldwI4_0aPgsusEzZ2269Q",
  authDomain: "reactnativeapp-735c2.firebaseapp.com",
  projectId: "reactnativeapp-735c2",
  storageBucket: "reactnativeapp-735c2.appspot.com",
  messagingSenderId: "358448723168",
  appId: "1:358448723168:web:39acfa4b161dfd3b04cc85"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);