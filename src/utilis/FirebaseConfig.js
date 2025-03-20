import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH0j714DYGijoCMhEeLC-UJGkaCsq52BA",
  authDomain: "portfolio-dd04d.firebaseapp.com",
  projectId: "portfolio-dd04d",
  storageBucket: "portfolio-dd04d.firebasestorage.app",
  messagingSenderId: "982800445493",
  appId: "1:982800445493:web:a26e4b873bc5ba4f5c817c",
  measurementId: "G-Q97VKKLLR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Export the Firebase services and functions
export { 
  app, 
  analytics,
  db,
  auth,
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc,
  getFirestore,
  getAuth 
};

export default app;