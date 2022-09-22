import { Link } from "react-router-dom";

import classes from "./Home.module.css";

function Home() {
	return (
		<section className={classes.home}>
			<h1>
				<span>F</span>lashy
			</h1>
			<Link className={classes.signup} to="/signup">
				Signup
			</Link>
			<Link className={classes.login} to="/login">
				Login
			</Link>
		</section>
	);
}

export default Home;
