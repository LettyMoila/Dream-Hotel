// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBCmq3NMwqnbO_l2hfwQZYFZlDkT86aAAk",
  authDomain: "dream-hotel-225cb.firebaseapp.com",
  projectId: "dream-hotel-225cb",
  storageBucket: "dream-hotel-225cb.appspot.com",
  messagingSenderId: "556270871848",
  appId: "1:556270871848:web:1b4d39ad2a52c98f599c1d",
  measurementId: "G-Q19GF4DLHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const imgOB = getStorage(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {db, auth, imgOB}