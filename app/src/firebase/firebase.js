// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore(); //tentative, or initialize this in node server