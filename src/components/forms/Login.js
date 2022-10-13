import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import firebaseAuth from "../firebase/Firebase";

import classes from "./Form.module.css";

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const loginUser = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then((curUser) => {
				navigate("/profile");
			})
			.catch((err) => {
				setError("User does not exist! Please recheck!");
			});
	};

	useEffect(() => {
		setError("");
	}, [email, password]);

	return (
		<div className={classes.formcontainer}>
			<h3>Login</h3>
			<form className={classes.form} onSubmit={loginUser}>
				<label className={classes.label} htmlFor="emaillogin">
					Email
				</label>
				<input
					className={classes.input}
					type="email"
					required
					id="emaillogin"
					name="email"
					placeholder="Enter Email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<label className={classes.label} htmlFor="passlogin">
					Password
				</label>
				<input
					className={classes.input}
					type="password"
					required
					id="passlogin"
					name="password"
					placeholder="Enter Password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<button className={classes.button} type="submit">
					Login
				</button>
				<p className={classes.error}>{error}</p>
			</form>
			<p className={classes.text}>
				Dont have an account yet?{" "}
				<Link className={classes.link} to="/signup">
					Signup now!
				</Link>
			</p>
		</div>
	);
}

export default Login;
