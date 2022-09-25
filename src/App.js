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
import Cards from "./components/card/Cards";
import Loading from "./components/pages/Loading";
import "./main.css";

function App() {
	const [user, loading, error] = useAuthState(firebaseAuth, {
		onUserChanged: true,
	});

	const DUMMY = [
		{
			id: 1,
			front: "Morgen",
			back: "朝",
		},
		{
			id: 2,
			front: "Abend",
			back: "夜",
		},
		{
			id: 3,
			front: "Mittag",
			back: "日中",
		},
		{
			id: 4,
			front: "Essen",
			back: "食べ物",
		},
		{
			id: 5,
			front: "Ich",
			back: "僕",
		},
	];

	return (
		<div className="main-container">
			<Header userObj={user} />
			<main>
				{loading && <Loading />}
				{!loading && (
					<Routes>
						<Route exact path="/" element={<Navigate to="/home" />} />
						<Route path="/home" element={<Home />} />
						{!loading && <Route path="*" element={<ErrorPage />} />}
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
									element={<AddCard data={DUMMY} />}
								/>
								<Route
									path="/profile/cards"
									exact
									element={<Cards data={DUMMY} />}
								/>
							</>
						)}
					</Routes>
				)}
			</main>
		</div>
	);
}

export default App;
