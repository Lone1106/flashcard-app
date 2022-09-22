import classes from "./Form.module.css";

function Login() {
	return (
		<div className={classes.formcontainer}>
			<h3>Login</h3>
			<form className={classes.form}>
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
