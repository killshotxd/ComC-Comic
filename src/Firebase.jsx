// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ36ezHhcFy-w5BF2h4NSZgDaqF-l1sqE",
  authDomain: "comccomic-50ff9.firebaseapp.com",
  projectId: "comccomic-50ff9",
  storageBucket: "comccomic-50ff9.appspot.com",
  messagingSenderId: "320803093059",
  appId: "1:320803093059:web:44a4bdc9fd66677bcab2f6",
  measurementId: "G-KW5B34DZRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
