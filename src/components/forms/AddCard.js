import { useRef } from "react";
import { setDoc, doc } from "firebase/firestore/lite";
import { db } from "../firebase/Firebase";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

import classes from "./Form.module.css";

function AddCard({ userObj }) {
	const front = useRef("");
	const back = useRef("");
	const navigate = useNavigate();

	const newCard = async (e) => {
		e.preventDefault();

		try {
			let docId = await uuid();
			await setDoc(doc(db, userObj.uid, docId), {
				frontside: front.current.value,
				backside: back.current.value,
				idRef: docId,
			});
			await e.target.reset();
		} catch (e) {
			console.log(e);
			navigate("/error");
		}
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
					ref={front}
					maxLength="50"
				/>
				<label className={classes.label} htmlFor="backside">
					Backside
				</label>
				<input
					className={classes.input}
					id="backside"
					type="text"
					placeholder="Add text"
					ref={back}
					maxLength="50"
				/>
				<button className={classes.button} type="submit">
					Add
				</button>
			</form>
		</div>
	);
}

export default AddCard;
