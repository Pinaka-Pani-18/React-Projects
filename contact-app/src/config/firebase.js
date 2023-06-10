// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7UNvFkHsBJpt_qvDneU6arolaCig-O_c",
  authDomain: "vite-contact-fb594.firebaseapp.com",
  projectId: "vite-contact-fb594",
  storageBucket: "vite-contact-fb594.appspot.com",
  messagingSenderId: "303347381261",
  appId: "1:303347381261:web:c8930333358d3dc8e9d144",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
