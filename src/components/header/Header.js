import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
	const [showNav, setShowNav] = useState(false);

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

	return (
		<header className={classes.header}>
			<div className={classes.headeritems}>
				<a href="/" className={classes.name}>
					<span>F</span>lashy
				</a>
				<i className={iconClasses} onClick={toggleNav}></i>
			</div>

			<div className={backdropClasses}></div>

			<nav className={navClasses}>
				<ul className={classes.navlist}>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/cards">Cards</Link>
					</li>
					<li>
						<Link to="/study">Study</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</header>
	);
}

export default Header;
