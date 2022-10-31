import { Link } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { doc, deleteDoc } from "firebase/firestore/lite";

import classes from "./Cards.module.css";

function Card({ textFront, textBack, id, deleteOne, userObj }) {
	let cardLink = `/profile/cards/update/${id}`;

	const deleteHandler = async (e) => {
		e.preventDefault();
		try {
			let docRef = await doc(db, userObj.uid, id);
			await deleteDoc(docRef);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<figure className={classes.card}>
			<div className={classes.text}>{textFront}</div>
			<div className={classes.text}>{textBack}</div>

			<div className={classes.buttons}>
				<Link to={cardLink} className={classes.button}>
					<i className="fa-solid fa-pen-to-square"></i>
				</Link>
				<button onClick={deleteHandler} className={classes.button}>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</figure>
	);
}

export default Card;
