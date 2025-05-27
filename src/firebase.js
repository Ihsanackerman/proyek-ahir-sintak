// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBa82tPB4aby4_yF1SIPFwbkeVUFuFND4",
  authDomain: "proyek-akhir-5564c.firebaseapp.com",
  projectId: "proyek-akhir-5564c",
  storageBucket: "proyek-akhir-5564c.firebasestorage.app",
  messagingSenderId: "50505646306",
  appId: "1:50505646306:web:e5931752b2d35a0373debb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };