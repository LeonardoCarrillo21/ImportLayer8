// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRrqdhZw9mD6pIBrVkd1sYA4LD3VzLsQw",
  authDomain: "react-fb-auth-f8561.firebaseapp.com",
  projectId: "react-fb-auth-f8561",
  storageBucket: "react-fb-auth-f8561.firebasestorage.app",
  messagingSenderId: "523647167699",
  appId: "1:523647167699:web:314c9b76d807bb24663826"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)