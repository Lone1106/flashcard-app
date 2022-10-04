import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

export const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export default firebaseAuth;
