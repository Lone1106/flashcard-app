import { useState } from "react";
import { signOut } from "firebase/auth";
import firebaseAuth from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

import classes from "./Header.module.css";

function Header({ userObj }) {
	const [showNav, setShowNav] = useState(false);
	const copyYear = new Date().getFullYear();
	const navigate = useNavigate();

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	let navClasses = showNav
		? `${classes.menu} ${classes.visible}`
		: `${classes.menu}`;

	let iconClasses = showNav
		? `${classes.icon} fa-solid fa-xmark`
		: `${classes.icon} fa-solid fa-bars`;

	let backdropClasses = showNav
		? `${classes.backdrop} ${classes.backdropvisible}`
		: `${classes.backdrop}`;

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
				<i className={iconClasses} onClick={toggleNav}></i>
			</div>

			<div className={backdropClasses}></div>

			<nav className={navClasses}>
				<div>
					{userObj && (
						<Link to="/home" onClick={logoutUser} className={classes.logout}>
							Logout
						</Link>
					)}
				</div>
				<ul className={classes.navlist}>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/profile/add-card">Add card</Link>
					</li>
					<li>
						<Link to="/profile/cards">Cards</Link>
					</li>
					<li>
						<Link to="/profile/study">Study</Link>
					</li>
				</ul>
				<p className={classes.copy}>
					&copy; <span>{copyYear}</span> Jan Reichherzer. Feel free to use.
				</p>
			</nav>
			<Outlet />
		</header>
	);
}

export default Header;
