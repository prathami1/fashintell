// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB23xGh3tWCv8Dho214KSPphIRtotK1f4Q",
  authDomain: "fashintell.firebaseapp.com",
  projectId: "fashintell",
  storageBucket: "fashintell.appspot.com",
  messagingSenderId: "104535433265",
  appId: "1:104535433265:web:02788ce3fd4b391246b510",
  measurementId: "G-M7ET7LVR18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);