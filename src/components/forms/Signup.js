import classes from "./Form.module.css";

function Signup() {
	return (
		<div className={classes.formcontainer}>
			<h3>Signup</h3>
			<form className={classes.form}>
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
				/>
				<button className={classes.button} type="submit">
					Signup
				</button>
			</form>
		</div>
	);
}

export default Signup;
