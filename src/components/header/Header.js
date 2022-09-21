import { useState } from "react";

import classes from "./Header.module.css";

function Header() {
	const [showNav, setShowNav] = useState(false);

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	let navClasses = showNav
		? `${classes.menu} ${classes.visible}`
		: `${classes.menu}`;

	let iconClasses = showNav ? `${classes.close}` : `${classes.icon}`;

	return (
		<header className={classes.header}>
			<div className={classes.headeritems}>
				<input type="checkbox" className={classes.toggle} id="navtoggle" />
				<p className={classes.name}>Flashy</p>
				<label
					className={classes.button}
					onClick={toggleNav}
					htmlFor="navtoggle"
				>
					<span className={iconClasses}>&nbsp;</span>
				</label>
			</div>

			<div className={classes.backdrop}></div>

			<nav className={navClasses}>
				<ul className={classes.navlist}>
					<li>
						<a href="#profile">Profile</a>
					</li>
					<li>
						<a href="#study">Study</a>
					</li>
					<li>
						<a href="#cards">Cards</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
