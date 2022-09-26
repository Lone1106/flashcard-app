import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation() {
	return (
		<nav className={classes.navigation}>
			<ul className={classes.navlist}>
				<li>
					<Link to="/profile">
						<i class="fa-solid fa-user"></i>
					</Link>
				</li>
				<li>
					<Link to="/profile/cards">
						<i class="fa-regular fa-copy"></i>
					</Link>
				</li>
				<li>
					<Link to="/profile/add-card">
						<i class="fa-solid fa-plus"></i>
					</Link>
				</li>
				<li>
					<Link to="/profile/study">
						<i class="fa-solid fa-repeat"></i>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
