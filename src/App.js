import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "./components/firebase/Firebase";

import Header from "./components/header/Header";
import Signup from "./components/forms/Signup";
import Login from "./components/forms/Login";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/Error";
import AddCard from "./components/forms/AddCard";
import "./main.css";

function App() {
	const [user, loading, error] = useAuthState(firebaseAuth, {
		onUserChanged: true,
	});

	return (
		<div className="main-container">
			<Header userObj={user} />
			<main>
				<Routes>
					<Route exact path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<Home />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="/signup" exact element={<Signup />} />
					<Route path="/login" exact element={<Login />} />

					{user && (
						<>
							<Route
								path="/profile"
								exact
								element={<Profile userObj={user} />}
							/>
							<Route
								path="/profile/add-card"
								exact
								element={<AddCard />}
							/>
						</>
					)}
				</Routes>
			</main>
		</div>
	);
}

export default App;
