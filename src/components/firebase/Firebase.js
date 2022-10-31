import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  getFirestore,
  query,
  collection,
  getDocs,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER,
  appId: process.env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
export const db = getFirestore(app);

export const getAllCards = async (userID) => {
  try {
    const q = query(collection(db, userID));
    const snapData = await getDocs(q);
    return snapData;
  } catch (e) {
    alert("Failed to fetch cards. Check connection.");
  }
};

export default firebaseAuth;
