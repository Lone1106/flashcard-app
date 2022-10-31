import { Link } from "react-router-dom";

import classes from "./Cards.module.css";

function Card({ textFront, textBack, id, deleteOne }) {
	let cardLink = `/profile/cards/update/${id}`;

	const deleteCard = () => {
		deleteOne(id);
	};

	return (
		<figure className={classes.card}>
			<div className={classes.text}>{textFront}</div>
			<div className={classes.text}>{textBack}</div>

			<div className={classes.buttons}>
				<Link to={cardLink} className={classes.button}>
					<i className="fa-solid fa-pen-to-square"></i>
				</Link>
				<button onClick={deleteCard} className={classes.button}>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</figure>
	);
}

export default Card;
