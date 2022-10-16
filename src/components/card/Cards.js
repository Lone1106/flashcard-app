import { doc, deleteDoc } from "firebase/firestore/lite";
import { getAllCards } from "../firebase/Firebase";
import { useState, useEffect } from "react";
import { db } from "../firebase/Firebase";
import Card from "./Card";

import classes from "./Cards.module.css";

function Cards({ userObj }) {
	const [cards, setCards] = useState([]);

	const deleteHandler = (cardId) => {
		let docRef = doc(db, "cards", cardId);
		deleteDoc(docRef);
		window.location.reload();
	};

	const deleteAllHandler = () => {
		console.log("Deleted all cards");
	};

	useEffect(() => {
		getAllCards(userObj).then((data) => {
			const arr = [];
			data.forEach((doc) => {
				arr.push(doc.data());
			});
			setCards(arr);
		});
	}, []);

	return (
		<section className={classes.cards}>
			{/*NOT IMPLEMENTED YET*/}
			<button className={classes.delete} onClick={deleteAllHandler}>
				Delete all cards
			</button>
			{/*NOT IMPLEMENTED YET*/}
			{cards.length === 0 && (
				<h4 className={classes.nocards}>There are no cards yet</h4>
			)}
			{cards.map((item) => {
				return (
					<Card
						textFront={item.frontside}
						textBack={item.backside}
						key={item.idRef}
						id={item.idRef}
						deleteOne={deleteHandler}
					/>
				);
			})}
		</section>
	);
}

export default Cards;
