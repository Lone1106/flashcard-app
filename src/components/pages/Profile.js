import classes from "./Profile.module.css";

function ProfilePage({ userObj }) {
	return (
		<section className={classes.profile}>
			<div className={classes.main}>
				<p className={classes.info}>User</p>
				<h4>{userObj.email}</h4>
				<p className={classes.uid}>{userObj.uid}</p>
			</div>
		</section>
	);
}

export default ProfilePage;
