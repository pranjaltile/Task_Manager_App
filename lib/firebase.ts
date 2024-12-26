// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgOtwrN30TDGJpPIp6HkbqFq1S5JB_F9Q",
  authDomain: "taskmanager-a221a.firebaseapp.com",
  projectId: "taskmanager-a221a",
  storageBucket: "taskmanager-a221a.firebasestorage.app",
  messagingSenderId: "137412864143",
  appId: "1:137412864143:web:0f4d91efd0588e44c028fa",
  measurementId: "G-51D4FBELM2"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const db = getFirestore(app)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
