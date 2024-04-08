// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrLbAraygWMReeZturNpg3v-QA-s_BEK0",
  authDomain: "dragpn-news.firebaseapp.com",
  projectId: "dragpn-news",
  storageBucket: "dragpn-news.appspot.com",
  messagingSenderId: "110451991523",
  appId: "1:110451991523:web:749747785caf198752b6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 export default auth;