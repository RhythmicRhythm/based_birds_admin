// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWObriBikUMxMrFOqaizY76I_imePgcsE",
  authDomain: "basedbirds-61db7.firebaseapp.com",
  projectId: "basedbirds-61db7",
  storageBucket: "basedbirds-61db7.appspot.com",
  messagingSenderId: "275656735759",
  appId: "1:275656735759:web:c91d177f2076e950d8b77a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);