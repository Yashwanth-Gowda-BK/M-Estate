// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "e-estate-4abae.firebaseapp.com",
  projectId: "e-estate-4abae",
  storageBucket: "e-estate-4abae.appspot.com",
  messagingSenderId: "985587414228",
  appId: "1:985587414228:web:b740a92d1b89f89467f741",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
