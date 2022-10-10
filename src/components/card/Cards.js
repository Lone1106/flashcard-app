import {
	collection,
	getDocs,
	query,
	where,
	doc,
	deleteDoc,
} from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { db } from "../firebase/Firebase";
import Card from "./Card";

import classes from "./Cards.module.css";

const getAllCards = async (user) => {
	const q = query(collection(db, "cards"), where("userEntry", "==", user.uid));
	const snapData = await getDocs(q);
	return snapData;
};

function Cards({ userObj }) {
	const [cards, setCards] = useState([]);

	const deleteHandler = (cardId) => {
		let docRef = doc(db, "cards", cardId);
		deleteDoc(docRef);
		window.location.reload();
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
