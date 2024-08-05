// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbm_5aLnNu9f5RQWuRiUVg23Wz1bdlbc4",
  authDomain: "netflix-clone-fe9af.firebaseapp.com",
  projectId: "netflix-clone-fe9af",
  storageBucket: "netflix-clone-fe9af.appspot.com",
  messagingSenderId: "145269603447",
  appId: "1:145269603447:web:141da4cfd56361d1695a72"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);