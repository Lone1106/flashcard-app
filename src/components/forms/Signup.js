import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import firebaseAuth from "../firebase/Firebase";
import classes from "./Form.module.css";

function Signup() {
	const navigate = useNavigate();
	const email = useRef("");
	const password = useRef("");
	const confPassword = useRef("");

	const createUser = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(
			firebaseAuth,
			email.current.value,
			password.current.value
		)
			.then((userCred) => {
				let user = userCred.user;
				console.log(user);
				navigate("/test");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className={classes.formcontainer}>
			<h3>Signup</h3>
			<form className={classes.form} onSubmit={createUser}>
				<label className={classes.label} htmlFor="emailsignup">
					Email
				</label>
				<input
					className={classes.input}
					type="email"
					required
					id="emailsignup"
					name="email"
					placeholder="Enter Email"
					ref={email}
				/>
				<label className={classes.label} htmlFor="passsignup">
					Password
				</label>
				<input
					className={classes.input}
					type="password"
					required
					id="passsignup"
					name="password"
					placeholder="Enter Password"
					ref={password}
				/>
				<label className={classes.label} htmlFor="passconf">
					Confirm Password
				</label>
				<input
					className={classes.input}
					type="password"
					required
					id="passconf"
					name="password"
					placeholder="Confirm Password"
					ref={confPassword}
				/>
				<button className={classes.button} type="submit">
					Signup
				</button>
			</form>
		</div>
	);
}

export default Signup;
