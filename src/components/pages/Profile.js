import { Link } from "react-router-dom";

import classes from "./Profile.module.css";

function ProfilePage({ userObj }) {
	return (
		<section className={classes.profile}>
			<div className={classes.top}>
				<p className={classes.info}>User</p>
				<h4>{userObj.email}</h4>
				<p className={classes.uid}>{userObj.uid}</p>
			</div>

			<ul className={classes.list}>
				<li className={classes.listItem}>
					<Link to="/profile/study">Study</Link>
				</li>
				<li className={classes.listItem}>
					<Link to="/profile/add-card">Add new Card</Link>
				</li>
				<li className={classes.listItem}>
					<Link to="/profile/cards">View all Cards</Link>
				</li>
			</ul>
		</section>
	);
}

export default ProfilePage;
