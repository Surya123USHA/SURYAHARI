
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2rxSwyNomR9N9vpdsDY_MTJxF6qdRLrc",
  authDomain: "surya-f098a.firebaseapp.com",
  projectId: "surya-f098a",
  storageBucket: "surya-f098a.appspot.com",
  messagingSenderId: "752548251785",
  appId: "1:752548251785:web:6be810287c5973cf769e58",
  measurementId: "G-M0ZTQJ6MZ1"
};

const app = firebase.initializeApp(firebaseConfig);
export default  app