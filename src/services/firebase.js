// Import the functions you need from the SDKs you need
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const prov = new GoogleAuthProvider();

function writeUserData(userId, n, e) {
  setDoc(doc(db, "users", userId), {
    name: n,
    email: e
  });
}

export const signInGoogle = () => {
  signInWithPopup(auth, prov)
    .then((result) => {
      writeUserData(result.user.uid, result.user.displayName, result.user.email)
  }).catch((error) => {
    console.log(error);
  });
};