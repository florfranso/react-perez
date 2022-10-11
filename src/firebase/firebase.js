import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Esto me permitira inicializar el Firestore

const firebaseConfig = {
    //credenciales de mi firebase
  apiKey: "AIzaSyCoS9Afa3SPeWm7ojx7UbB5UCJMNv3WSB0",
  authDomain: "vivero-siempre-verde.firebaseapp.com",
  projectId: "vivero-siempre-verde",
  storageBucket: "vivero-siempre-verde.appspot.com",
  messagingSenderId: "750433195813",
  appId: "1:750433195813:web:423f63e4945269ea7e2ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) // Esto es lo unico que necesito actualmente para manejar la base de datos.