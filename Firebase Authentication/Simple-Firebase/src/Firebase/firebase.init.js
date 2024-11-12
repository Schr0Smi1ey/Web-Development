// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Deai7UXztwr1ZwgrbCrXB4_cI_-5Rxg",
  authDomain: "simple-firebase-e8c5e.firebaseapp.com",
  projectId: "simple-firebase-e8c5e",
  storageBucket: "simple-firebase-e8c5e.firebasestorage.app",
  messagingSenderId: "751016395472",
  appId: "1:751016395472:web:b5969def5cc26f243d94d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
