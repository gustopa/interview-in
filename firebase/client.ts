
import { initializeApp, getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxl1HBZqRJMJQSlFBtwaVzwl_pTgW9gQA",
  authDomain: "interviewin-1.firebaseapp.com",
  projectId: "interviewin-1",
  storageBucket: "interviewin-1.firebasestorage.app",
  messagingSenderId: "967112517492",
  appId: "1:967112517492:web:391fc0f0f9713aac0f6e21",
  measurementId: "G-T339WTHGZC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)