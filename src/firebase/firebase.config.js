// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNqF6AvBmI8k18umcZbQptu1-mlkkl9O4",
  authDomain: "ph-assignment-09-skillswap.firebaseapp.com",
  projectId: "ph-assignment-09-skillswap",
  storageBucket: "ph-assignment-09-skillswap.firebasestorage.app",
  messagingSenderId: "594207949176",
  appId: "1:594207949176:web:a080e657ec47c9776c088d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;