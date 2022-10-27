import {
	sendPasswordResetEmail,
	deleteUser,
	reauthenticateWithCredential,
	EmailAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import firebaseAuth from "../firebase/Firebase";

import classes from "./Profile.module.css";

function ProfilePage({ userObj }) {
	const navigate = useNavigate();

	const reAuthUser = async () => {
		let userProvidedPassword = await "testtest";
		const credential = await EmailAuthProvider.credential(
			userObj.email,
			userProvidedPassword
		);
		await reauthenticateWithCredential(userObj, credential);
	};

	const changePassword = () => {
		reAuthUser()
			.then(() => {
				sendPasswordResetEmail(firebaseAuth, userObj.email)
					.then(() => {
						alert(`Sent reset email to ${userObj.email}`);
					})
					.catch((err) => {
						alert("An error occured while seding.");
					});
			})
			.catch((err) => {
				alert("An error occured while reauthenticating.");
			});
	};

	const deleteProfile = () => {
		reAuthUser()
			.then(() => {
				deleteUser(userObj)
					.then(() => {
						navigate("/home");
					})
					.catch((err) => {
						alert("An error occured while deleting the user.");
					});
			})
			.catch((err) => {
				alert("An error occured while reauthenticating.");
			});
	};

	return (
		<section className={classes.profile}>
			<div className={classes.main}>
				<p className={classes.info}>User</p>
				<h4>{userObj.email}</h4>
				<p className={classes.uid}>{userObj.uid}</p>

				<div className={classes.buttons}>
					<button className={classes.option} onClick={changePassword}>
						Change Password
					</button>
					<button className={classes.option} onClick={deleteProfile}>
						Delete Profile
					</button>
				</div>
			</div>
		</section>
	);
}

export default ProfilePage;
