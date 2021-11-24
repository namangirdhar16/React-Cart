import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: "cart-54a96.firebaseapp.com",
    projectId: "cart-54a96",
    storageBucket: "cart-54a96.appspot.com",
    messagingSenderId: "337601384171",
    appId: "1:337601384171:web:fa68d1c366f4ff858ef8ae",
    measurementId: "G-J68KW36QG7"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
