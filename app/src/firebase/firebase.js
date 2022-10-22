// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAif7pY5_ZROfKbte6MFHXX9WSJyiGF1p0",
  authDomain: "peekqueue.firebaseapp.com",
  projectId: "peekqueue",
  storageBucket: "peekqueue.appspot.com",
  messagingSenderId: "769322460935",
  appId: "1:769322460935:web:9e351d004bc294c6cc07a2",
  measurementId: "G-EXTYFFY4S1"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app); //tentative, or initialize this in node server