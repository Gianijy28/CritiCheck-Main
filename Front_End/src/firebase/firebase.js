import { initializeApp } from "firebase/app"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2CL9ZaJ4cJSo2vr8qizaC2FRPUlsHyiM",
  authDomain: "criticheck.firebaseapp.com",
  databaseURL: "https://criticheck-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "criticheck",
  storageBucket: "criticheck.firebasestorage.app",
  messagingSenderId: "529825237799",
  appId: "1:529825237799:web:a942712c1504179aa57702",
  measurementId: "G-KZ3JR7SVM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };