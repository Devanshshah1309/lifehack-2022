// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA3aUD2ffM8HI5bq-9UgQvm4S4zxd0pUQ",
  authDomain: "trade-eats.firebaseapp.com",
  projectId: "trade-eats",
  storageBucket: "trade-eats.appspot.com",
  messagingSenderId: "438829504560",
  appId: "1:438829504560:web:ddd616631ac83e8f6375f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app);
