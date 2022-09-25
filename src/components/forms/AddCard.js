import { useState } from "react";

import classes from "./Form.module.css";

function AddCard({ data }) {
	const [front, setFront] = useState("");
	const [back, setBack] = useState("");

	const newCard = (e) => {
		e.preventDefault();
		let cardItem = {
			id: data.length + 1,
			front,
			back,
		};

		data.push(cardItem);
		setFront("");
		setBack("");
	};

	return (
		<div className={classes.formcontainer}>
			<h3>Add Card</h3>
			<form className={classes.form} onSubmit={newCard}>
				<label className={classes.label} htmlFor="frontside">
					Frontside
				</label>
				<input
					className={classes.input}
					id="frontside"
					type="text"
					placeholder="Add text"
					onChange={(e) => setFront(e.target.value)}
					value={front}
				/>
				<label className={classes.label} htmlFor="backside">
					Backside
				</label>
				<input
					className={classes.input}
					id="backside"
					type="text"
					placeholder="Add text"
					onChange={(e) => setBack(e.target.value)}
					value={back}
				/>
				<button className={classes.button} type="submit">
					Add
				</button>
			</form>
		</div>
	);
}

export default AddCard;
