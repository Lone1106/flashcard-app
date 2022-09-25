import classes from "./Form.module.css";

function ChangeCard() {
	return (
		<div className={classes.formcontainer}>
			<h3>Update Card</h3>
			<form className={classes.form}>
				<label className={classes.label} htmlFor="frontside">
					Frontside
				</label>
				<input className={classes.input} id="frontside" type="text" />
				<label className={classes.label} htmlFor="backside">
					Backside
				</label>
				<input className={classes.input} id="backside" type="text" />
				<button className={classes.button} type="submit">
					Update
				</button>
			</form>
		</div>
	);
}

export default ChangeCard;
