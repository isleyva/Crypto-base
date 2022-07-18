// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYTPsNolC-C6M3kMuhxISSBOY8PhxFJhw",
  authDomain: "cryptobase-1860c.firebaseapp.com",
  projectId: "cryptobase-1860c",
  storageBucket: "cryptobase-1860c.appspot.com",
  messagingSenderId: "1051682645850",
  appId: "1:1051682645850:web:67e66bc22ce3241dc1b563",
  measurementId: "G-Q49BEHJLQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);