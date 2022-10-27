import classes from "./Cards.module.css";

function Card({ textFront, textBack, id, deleteOne }) {
	const deleteCard = () => {
		deleteOne(id);
	};

	const changeCard = () => {};

	return (
		<figure className={classes.card}>
			<div className={classes.text}>{textFront}</div>
			<div className={classes.text}>{textBack}</div>

			<div className={classes.buttons}>
				{/*NOT IMPLEMENTED YET*/}
				<button onClick={changeCard} className={classes.button}>
					<i className="fa-solid fa-pen-to-square"></i>
				</button>
				{/*NOT IMPLEMENTED YET*/}
				<button onClick={deleteCard} className={classes.button}>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</figure>
	);
}

export default Card;
