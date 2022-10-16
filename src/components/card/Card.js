import classes from "./Cards.module.css";

function Card({ textFront, textBack, id, deleteOne }) {
	const deleteCard = () => {
		deleteOne(id);
	};

	const changeCard = () => {
		console.log("Card changed!");
	};

	return (
		<figure className={classes.card}>
			<div className={classes.text}>{textFront}</div>
			<div className={classes.text}>{textBack}</div>

			<div className={classes.buttons}>
				<button onClick={changeCard} className={classes.button}>
					<i class="fa-solid fa-pen-to-square"></i>
				</button>
				{/*NOT IMPLEMENTED YET*/}
				<button onClick={deleteCard} className={classes.button}>
					<i className="fa-solid fa-trash"></i>
				</button>
				{/*NOT IMPLEMENTED YET*/}
			</div>
		</figure>
	);
}

export default Card;
