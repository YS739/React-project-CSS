// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: 'AIzaSyB1D5eiaRm7_liQ1eJLpeXUvxCk7u7IZlU',
  // authDomain: 'clonecodingsharespace.firebaseapp.com',
  // projectId: 'clonecodingsharespace',
  // storageBucket: 'clonecodingsharespace.appspot.com',
  // messagingSenderId: '944609198241',
  // appId: '1:944609198241:web:417b5c12874e63cffdf0e0',
  // measurementId: 'G-TGLWB5N10G',
  apiKey: 'AIzaSyAPTGoXX_M5Gm4PjcKarOB8pU4wEeVYk6A',
  authDomain: 'pj-bfeda.firebaseapp.com',
  projectId: 'pj-bfeda',
  storageBucket: 'pj-bfeda.appspot.com',
  messagingSenderId: '419716600931',
  appId: '1:419716600931:web:252e6d02276d82f41b1456',
  measurementId: 'G-WWWDZGQEG3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);
