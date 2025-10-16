// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPiWoiqzKO4wuyWjd-GQdR2FN5FEeT3wY",
  authDomain: "loco-4db99.firebaseapp.com",
  projectId: "loco-4db99",
  storageBucket: "loco-4db99.firebasestorage.app",
  messagingSenderId: "1082591835169",
  appId: "1:1082591835169:web:8768d6c019e7643e4d1f60"
};

// Initialize Firebase
    // Inicializa Firebase
    const app = initializeApp(firebaseConfig);

    // Exporta los servicios de Firebase que usarás en tu aplicación
    export const db = getFirestore(app);
    export const auth = getAuth(app);