import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "./components/firebase/Firebase";

import Header from "./components/header/Header";
import Signup from "./components/forms/Signup";
import Login from "./components/forms/Login";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/Error";
import AddCard from "./components/forms/AddCard";
import Cards from "./components/card/Cards";
import Loading from "./components/pages/Loading";
import Navigation from "./components/navigation/Navigation";
import Study from "./components/study/Study";
import ChangeCard from "./components/forms/ChangeCard";
import { ProtectRoute } from "./components/util/Util";
import "./main.css";

function App() {
	const [user, loading] = useAuthState(firebaseAuth, {
		onUserChanged: true,
	});
	const [navigated, setNavigated] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (user && !navigated) {
			navigate("/profile");
			setNavigated(true);
		}
	}, [user]);

	return (
		<div className="main-container">
			<Header userObj={user} />
			{user && <Navigation />}
			<main>
				{loading && <Loading />}
				{!loading && (
					<Routes>
						<Route exact path="/error" element={<ErrorPage />} />
						<Route exact path="/" element={<Navigate to="/home" />} />
						<Route path="/home" element={<Home />} />
						{!loading && <Route path="*" element={<ErrorPage />} />}
						<Route path="/signup" exact element={<Signup />} />
						<Route path="/login" exact element={<Login />} />

						<Route
							path="/profile"
							exact
							element={
								<ProtectRoute userObj={user}>
									<Profile userObj={user} />
								</ProtectRoute>
							}
						/>
						<Route
							path="/profile/add-card"
							exact
							element={
								<ProtectRoute userObj={user}>
									<AddCard userObj={user} />
								</ProtectRoute>
							}
						/>
						<Route
							path="/profile/cards"
							exact
							element={
								<ProtectRoute userObj={user}>
									<Cards userObj={user} />
								</ProtectRoute>
							}
						/>
						<Route
							path="/profile/cards/update/:cardId"
							element={
								<ProtectRoute userObj={user}>
									<ChangeCard userObj={user} />
								</ProtectRoute>
							}
						/>
						<Route
							path="/profile/study"
							exact
							element={
								<ProtectRoute userObj={user}>
									<Study userObj={user} />
								</ProtectRoute>
							}
						/>
					</Routes>
				)}
			</main>
		</div>
	);
}

export default App;
