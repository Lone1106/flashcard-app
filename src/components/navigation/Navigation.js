import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation() {
	return (
		<nav className={classes.navigation}>
			<ul className={classes.navlist}>
				<li>
					<Link to="/profile">
						<p>Profile</p>
					</Link>
				</li>
				<li>
					<Link to="/profile/cards">
						<p>Cards</p>
					</Link>
				</li>
				<li>
					<Link to="/profile/add-card">
						<p>Add</p>
					</Link>
				</li>
				<li>
					<Link to="/profile/study">
						<p>Study</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
