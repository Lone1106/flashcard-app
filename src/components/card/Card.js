import classes from "./Cards.module.css";

function Card({ displayText, id }) {

	const actOnClick = () => {};

	return (
		<figure onClick={actOnClick} className={classes.card}>
			{displayText}
		</figure>
	);
}

export default Card;
