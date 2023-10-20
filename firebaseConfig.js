// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBMgaIrOFwYwlJNCSEt8V-Kah_Qm2rZAY",
  authDomain: "vintage-483d3.firebaseapp.com",
  projectId: "vintage-483d3",
  storageBucket: "vintage-483d3.appspot.com",
  messagingSenderId: "493912663952",
  appId: "1:493912663952:web:8654442b86f292b8657515",
  measurementId: "G-FX6368P583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);