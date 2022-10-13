import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import firebaseAuth from "../firebase/Firebase";
import classes from "./Form.module.css";

function Signup() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [error, setError] = useState("");

	const createUser = (e) => {
		e.preventDefault();

		if (password.length < 8) {
			setError("Password must be at least 8 characters long!");
			return;
		}

		if (password !== confPassword) {
			setError("Passwords dont match!");
			return;
		}

		createUserWithEmailAndPassword(firebaseAuth, email, password)
			.then(() => {
				navigate("/profile");
			})
			.catch((err) => {
				setError("User already exists!")
			});
	};

	useEffect(() => {
		setError("");
	}, [email, password, confPassword]);

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
					onChange={(e) => {
						setEmail(e.target.value);
					}}
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
					onChange={(e) => {
						setPassword(e.target.value);
					}}
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
					onChange={(e) => {
						setConfPassword(e.target.value);
					}}
				/>
				<button className={classes.button} type="submit">
					Signup
				</button>
				<p className={classes.error}>{error}</p>
			</form>
			<p className={classes.text}>
				Already have an account?{" "}
				<Link className={classes.link} to="/login">
					Login here!
				</Link>
			</p>
		</div>
	);
}

export default Signup;
