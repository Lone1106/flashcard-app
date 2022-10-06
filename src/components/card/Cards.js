import { collection, getDocs, query, where } from "firebase/firestore/lite";
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
			{cards.map((item) => {
				return <Card displayText={item.frontside} key={item.id} id={item.id} />;
			})}
		</section>
	);
}

export default Cards;
