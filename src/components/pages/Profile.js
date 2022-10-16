import classes from "./Profile.module.css";

function ProfilePage({ userObj }) {
	const changePassword = () => {
		console.log("Password changed!");
	};

	const deleteProfile = () => {
		console.log("Deleted Profile!");
	};

	return (
		<section className={classes.profile}>
			<div className={classes.main}>
				<p className={classes.info}>User</p>
				<h4>{userObj.email}</h4>
				<p className={classes.uid}>{userObj.uid}</p>

				{/*Not implemented yet*/}
				<div className={classes.buttons}>
					<button className={classes.option} onClick={changePassword}>
						Change Password
					</button>
					<button className={classes.option} onClick={deleteProfile}>
						Delete Profile
					</button>
				</div>
				{/*Not implemented yet*/}
			</div>
		</section>
	);
}

export default ProfilePage;
