import classes from "./Loading.module.css";

function Loading() {
	return (
		<section className={classes.wrapper}>
			<div className={classes.spinner}></div>
			<p className={classes.text}>Loading</p>
		</section>
	);
}

export default Loading;
