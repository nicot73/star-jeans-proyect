import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVLEMN5Zn0E0WL3yqgTJH81X8mSCXyWZA",
  authDomain: "starjeans-website-9b4ff.firebaseapp.com",
  projectId: "starjeans-website-9b4ff",
  storageBucket: "starjeans-website-9b4ff.appspot.com",
  messagingSenderId: "697754415161",
  appId: "1:697754415161:web:a44768e83e64165f3d5de8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);