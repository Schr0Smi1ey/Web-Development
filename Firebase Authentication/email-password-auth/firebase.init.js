// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLMUVmPNleCbnwaIsLfnMiPJS2j0k1Bmw",
  authDomain: "email-password-auth-129ac.firebaseapp.com",
  projectId: "email-password-auth-129ac",
  storageBucket: "email-password-auth-129ac.firebasestorage.app",
  messagingSenderId: "627014450254",
  appId: "1:627014450254:web:0b6cb8eb748fc246cb971f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
