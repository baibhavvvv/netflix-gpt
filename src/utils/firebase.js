// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSaxDIAVwBIKjT4xpmJF6sW-LiuwG_uMM",
  authDomain: "netflix-gpt-713ac.firebaseapp.com",
  projectId: "netflix-gpt-713ac",
  storageBucket: "netflix-gpt-713ac.appspot.com",
  messagingSenderId: "159214266176",
  appId: "1:159214266176:web:fe90405ca717e7488e7ca5",
  measurementId: "G-XGFFER21CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();