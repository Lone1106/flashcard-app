import { signOut } from "firebase/auth";
import firebaseAuth from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import classes from "./Header.module.css";

function Header({ userObj }) {
	const navigate = useNavigate();

	let linkDest = userObj ? "/profile" : "/home";

	const logoutUser = () => {
		signOut(firebaseAuth)
			.then(() => {
				console.log("logged out");
				navigate("/home");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<header className={classes.header}>
			<div className={classes.headeritems}>
				<Link to={linkDest} className={classes.name}>
					<span>F</span>lashy
				</Link>
				{userObj && (
					<Link to="/home" onClick={logoutUser} className={classes.logout}>
						Logout
					</Link>
				)}
			</div>
			<Outlet />
		</header>
	);
}

export default Header;
