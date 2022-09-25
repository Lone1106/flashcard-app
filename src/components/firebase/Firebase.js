import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2mOgeodybc2qjz7ZB7ZLW5Z_EsQOMZmA",
  authDomain: "flashcard-app-5ddc9.firebaseapp.com",
  projectId: "flashcard-app-5ddc9",
  storageBucket: "flashcard-app-5ddc9.appspot.com",
  messagingSenderId: "93227632429",
  appId: "1:93227632429:web:5379f408513c551dd6b5a4"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export default firebaseAuth;
