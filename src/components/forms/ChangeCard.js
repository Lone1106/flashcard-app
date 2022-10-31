import { updateDoc, doc } from "firebase/firestore/lite";
import { db } from "../firebase/Firebase";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";

import classes from "./Form.module.css";

function ChangeCard() {
	const params = useParams();
	const navigate = useNavigate();

	const updatedFront = useRef();
	const updatedBack = useRef();

	const updateCard = async (e) => {
		e.preventDefault();
		try {
			let cardRef = await doc(db, "cards", params.cardId);
			await updateDoc(cardRef, {
				frontside: updatedFront.current.value,
				backside: updatedBack.current.value,
			});
			navigate("/profile/cards");
		} catch (e) {
			console.log(e);
			navigate("/error");
		}
	};

	return (
		<div className={classes.formcontainer}>
			<h3>Update Card</h3>
			<form className={classes.form} onSubmit={updateCard}>
				<label className={classes.label} htmlFor="frontside">
					Frontside
				</label>
				<input
					className={classes.input}
					id="frontside"
					type="text"
					placeholder="New frontside"
					ref={updatedFront}
				/>
				<label className={classes.label} htmlFor="backside">
					Backside
				</label>
				<input
					className={classes.input}
					id="backside"
					type="text"
					placeholder="New backside"
					ref={updatedBack}
				/>
				<button className={classes.button} type="submit">
					Update
				</button>
			</form>
		</div>
	);
}

export default ChangeCard;
