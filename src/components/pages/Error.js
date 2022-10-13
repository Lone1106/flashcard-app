import classes from "./Error.module.css";

function ErrorPage() {
	return <p className={classes.error}>Either this page does not exist or a error occured. Please check/try again!</p>;
}

export default ErrorPage;
