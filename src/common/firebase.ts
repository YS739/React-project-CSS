import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1D5eiaRm7_liQ1eJLpeXUvxCk7u7IZlU',
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
