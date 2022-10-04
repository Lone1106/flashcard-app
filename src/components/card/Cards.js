import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore/lite";
import { app } from "../firebase/Firebase";
import { useState, useEffect } from "react";
import Card from "./Card";

import classes from "./Cards.module.css";

function Cards({ userObj }) {
	const db = getFirestore(app);
	const [allCards, setAllCards] = useState([]);
	const arr = [];

	const getAllCards = async () => {
		const q = query(
			collection(db, "cards"),
			where("userEntry", "==", userObj.uid)
		);
		const snap = await getDocs(q);
		snap.forEach((doc) => {
			arr.push(doc.data());
		});
		console.log(arr);
	};



	return (
		<section className={classes.cards}>
			{allCards.map((item) => {
				return <Card displayText={item.frontside} key={item.id} id={item.id} />;
			})}
		</section>
	);
}

export default Cards;
