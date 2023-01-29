import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'clonecodingsharespace.firebaseapp.com',
  projectId: 'clonecodingsharespace',
  storageBucket: 'clonecodingsharespace.appspot.com',
  messagingSenderId: '944609198241',
  appId: '1:944609198241:web:417b5c12874e63cffdf0e0',
  measurementId: 'G-TGLWB5N10G',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);
