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
import Navigation from "./components/navigation/Navigation";
import Study from "./components/study/Study";
import "./main.css";

function App() {
	const [user, loading, error] = useAuthState(firebaseAuth, {
		onUserChanged: true,
	});

	return (
		<div className="main-container">
			<Header userObj={user} />
			{user && <Navigation />}
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
									element={<AddCard userObj={user} />}
								/>
								<Route
									path="/profile/cards"
									exact
									element={<Cards userObj={user} />}
								/>
								<Route
									path="/profile/study"
									exact
									element={<Study userObj={user} />}
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
