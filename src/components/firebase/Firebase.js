import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import env from "react-dotenv";

const firebaseConfig = {
	apiKey: env.REACT_APP_API,
	authDomain: env.REACT_APP_DOMAIN,
	projectId: env.REACT_APP_PROJECT_ID,
	storageBucket: env.REACT_APP_BUCKET,
	messagingSenderId: env.REACT_APP_SENDER,
	appId: env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export default firebaseAuth;
