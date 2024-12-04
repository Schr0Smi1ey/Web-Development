// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0vVot6FeRhlSJho7yzd12xfa1VnwlW_U",
  authDomain: "auth-private-route-4036f.firebaseapp.com",
  projectId: "auth-private-route-4036f",
  storageBucket: "auth-private-route-4036f.firebasestorage.app",
  messagingSenderId: "66545805785",
  appId: "1:66545805785:web:1445047bcc617efd8711c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
