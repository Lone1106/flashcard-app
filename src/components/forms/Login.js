import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import firebaseAuth from "../firebase/Firebase";

import classes from "./Form.module.css";

function Login() {
	const navigate = useNavigate();
	const email = useRef("");
	const password = useRef("");

	const loginUser = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(
			firebaseAuth,
			email.current.value,
			password.current.value
		)
			.then((curUser) => {
				navigate("/test");
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
					ref={email}
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
					ref={password}
				/>
				<button className={classes.button} type="submit">
					Login
				</button>
			</form>
			<p className={classes.text}>
				Dont have an account yet?{" "}
				<a className={classes.link} href="#signup">
					Signup now!
				</a>
			</p>
		</div>
	);
}

export default Login;
