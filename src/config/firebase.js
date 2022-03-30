// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmHMFjCzaECCz-aZWE_yjRYJuZB8ZtYG0",
  authDomain: "projectauth-5d469.firebaseapp.com",
  projectId: "projectauth-5d469",
  storageBucket: "projectauth-5d469.appspot.com",
  messagingSenderId: "1099247640281",
  appId: "1:1099247640281:web:ee085fca84a642d22768c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)