// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx4GFCrrcPZsRDfde7cFbGoDGKclfE6Zk",
  authDomain: "fir-project-1-3a52f.firebaseapp.com",
  projectId: "fir-project-1-3a52f",
  storageBucket: "fir-project-1-3a52f.appspot.com",
  messagingSenderId: "846385104518",
  appId: "1:846385104518:web:b555571520340f785ab307",
  measurementId: "G-MWRLFW8XC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();