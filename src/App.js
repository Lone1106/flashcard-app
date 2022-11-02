import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "./components/firebase/Firebase";

import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import { ProtectRoute } from "./components/util/Util";

import "./main.css";

const Signup = lazy(() => import("./components/forms/Signup"));
const Login = lazy(() => import("./components/forms/Login"));
const AddCard = lazy(() => import("./components/forms/AddCard"));
const Cards = lazy(() => import("./components/card/Cards"));
const Profile = lazy(() => import("./components/pages/Profile"));
const Study = lazy(() => import("./components/study/Study"));
const ChangeCard = lazy(() => import("./components/forms/ChangeCard"));
const Loading = lazy(() => import("./components/pages/Loading"));
const Navigation = lazy(() => import("./components/navigation/Navigation"));
const ErrorPage = lazy(() => import("./components/pages/Error"));


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
					<Suspense fallback={<Loading />}>
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
					</Suspense>
				)}
			</main>
		</div>
	);
}

export default App;
