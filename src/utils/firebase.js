// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-3ed15.firebaseapp.com",
  projectId: "blog-3ed15",
  storageBucket: "blog-3ed15.appspot.com",
  messagingSenderId: "244172829071",
  appId: "1:244172829071:web:4c2721acbd6e358de55bfa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
