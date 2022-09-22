import { Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Signup from "./components/forms/Signup";
import Login from "./components/forms/Login";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/Error";
import "./main.css";

function App() {
	return (
		<div className="main-container">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="/signup" exact element={<Signup />} />
					<Route path="/login" exact element={<Login />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
