// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuqWOvBBz-2fEYFlb16oDNyVEdZCn3EIs",
  authDomain: "sistema-de-compras-95ebc.firebaseapp.com",
  projectId: "sistema-de-compras-95ebc",
  storageBucket: "sistema-de-compras-95ebc.appspot.com",
  messagingSenderId: "766541000253",
  appId: "1:766541000253:web:f9bcf407c14773aa61c454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);