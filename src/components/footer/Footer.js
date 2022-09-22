import classes from "./Footer.module.css";

function Footer() {
	let copyYear = new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<p>&copy; <span>{copyYear}</span> Jan Reichherzer. Feel free to use.</p>
		</footer>
	);
}

export default Footer;
