// Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXdFSMIJfi_j8BhNdD2jzZLayydg54oPY",
  authDomain: "my-splash-73291.firebaseapp.com",
  projectId: "my-splash-73291",
  storageBucket: "my-splash-73291.firebasestorage.app",
  messagingSenderId: "716481667015",
  appId: "1:716481667015:web:75c1693ffb1841580903e2",
};

const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
