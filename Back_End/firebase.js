// firebase.js (Inside Back_End folder)
import { initializeApp } from "firebase/app"; 
import { getAuth, onAuthStateChanged } from "firebase/auth"; // If using Firebase Auth
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage"; // If using Storage

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
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

export { auth, db, storage };

// Detect auth state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Logged in!");
    } else {
        console.log("No user");
    }
});