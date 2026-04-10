import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBVuXePbEfBD83GMTh5d2OZoQ4egRB9nCE',

  authDomain: 'crud-demo-ew.firebaseapp.com',

  projectId: 'crud-demo-ew',

  storageBucket: 'crud-demo-ew.firebasestorage.app',

  messagingSenderId: '45218477172',

  appId: '1:45218477172:web:cbda250b240d8b79c98d21',
};

const firebase_app = initializeApp(firebaseConfig);
export const db = getFirestore(firebase_app);
