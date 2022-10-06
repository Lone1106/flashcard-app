import classes from "./Cards.module.css";

function Card({ displayText, id }) {
	const editCard = () => {};

	const deleteCard = () => {};

	return (
		<figure className={classes.card}>
			<div className={classes.text}>{displayText}</div>

			<div className={classes.buttons}>
				<button onClick={editCard} className={classes.button}>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
				<button onClick={deleteCard} className={classes.button}>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</figure>
	);
}

export default Card;
