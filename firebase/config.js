// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzJLs7Is-c1BtGG9rjpZl7vX-_Dctwtn4",
  authDomain: "fir-livehack.firebaseapp.com",
  projectId: "fir-livehack",
  storageBucket: "fir-livehack.appspot.com",
  messagingSenderId: "762732063865",
  appId: "1:762732063865:web:81367e8cddaba33ab978a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app);
