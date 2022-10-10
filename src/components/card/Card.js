import classes from "./Cards.module.css";

function Card({ textFront, textBack, id, deleteOne }) {
	const deleteCard = () => {
		deleteOne(id);
	};

	return (
		<figure className={classes.card}>
			<div className={classes.text}>{textFront}</div>
			<div className={classes.text}>{textBack}</div>

			<div className={classes.buttons}>
				<button onClick={deleteCard} className={classes.button}>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</figure>
	);
}

export default Card;
