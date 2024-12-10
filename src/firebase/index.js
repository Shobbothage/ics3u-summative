import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyCrOyhbD0wnjCE4Gwj9q1NvhTxFZjZIuN8",
    authDomain: "summative-9b9bf.firebaseapp.com",
    projectId: "summative-9b9bf",
    storageBucket: "summative-9b9bf.firebasestorage.app",
    messagingSenderId: "107407635939",
    appId: "1:107407635939:web:54df95d86a1d791874dcd6"
  };

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };