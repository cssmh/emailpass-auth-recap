// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMEGDXmfUVub2wo00KP_MYd8mOLBuTjvM",
  authDomain: "user-emailpass-auth-d0b68.firebaseapp.com",
  projectId: "user-emailpass-auth-d0b68",
  storageBucket: "user-emailpass-auth-d0b68.appspot.com",
  messagingSenderId: "583073272428",
  appId: "1:583073272428:web:c315e789e107d71999be49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth