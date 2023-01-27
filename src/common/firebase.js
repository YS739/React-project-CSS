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

  // apiKey: 'AIzaSyAPTGoXX_M5Gm4PjcKarOB8pU4wEeVYk6A',
  // authDomain: 'pj-bfeda.firebaseapp.com',
  // projectId: 'pj-bfeda',
  // storageBucket: 'pj-bfeda.appspot.com',
  // messagingSenderId: '419716600931',
  // appId: '1:419716600931:web:252e6d02276d82f41b1456',
  // measurementId: 'G-WWWDZGQEG3',

  // apiKey: 'AIzaSyCoM9RclYcyw01TkfHZ9pn5VmyVp7Hsx4w',
  // authDomain: 'temp-9d727.firebaseapp.com',
  // projectId: 'temp-9d727',
  // storageBucket: 'temp-9d727.appspot.com',
  // messagingSenderId: '10786157907',
  // appId: '1:10786157907:web:edae154c6222a2e2b09da6',

  // 민우님
  apiKey: 'AIzaSyCUXWVD58EqzEHeJ_HBjqAhBxBBta1J5YE',
  authDomain: 'rn-login-project-37296.firebaseapp.com',
  projectId: 'rn-login-project-37296',
  storageBucket: 'rn-login-project-37296.appspot.com',
  messagingSenderId: '518256182702',
  appId: '1:518256182702:web:f0d89572130e6f80f7b43f',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
export const db = getFirestore(app);
