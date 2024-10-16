import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyBS2r5-PPza1FfOvdSTbwACfWz1tEquiGE",
  authDomain: "proyect-react-icommerce.firebaseapp.com",
  projectId: "proyect-react-icommerce",
  storageBucket: "proyect-react-icommerce.appspot.com",
  messagingSenderId: "73903661687",
  appId: "1:73903661687:web:0fea64a7207d812fad5c72"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
