import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, push, remove } from "firebase/database"; 
import { getAnalytics } from "firebase/analytics";
const FIREBASE_KEY = import.meta.env.VITE_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "cornerkick-15acb.firebaseapp.com",
  databaseURL: "https://cornerkick-15acb-default-rtdb.firebaseio.com",
  projectId: "cornerkick-15acb",
  storageBucket: "cornerkick-15acb.firebasestorage.app",
  messagingSenderId: "125001526983",
  appId: "1:125001526983:web:2fa7cd7a83d64e138d58e2",
  measurementId: "G-N14VMGSQ7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database
const database = getDatabase(app);

export { database, ref, set, get, push, remove };