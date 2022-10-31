import { doc, deleteDoc } from "firebase/firestore/lite";
import { getAllCards } from "../firebase/Firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/Firebase";
import Card from "./Card";

import classes from "./Cards.module.css";

function Cards({ userObj }) {
	const navigate = useNavigate();
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const deleteHandler = (cardId) => {
		let docRef = doc(db, userObj.uid, cardId);
		deleteDoc(docRef);
		window.location.reload();
		navigate("/profile/cards");
	};

	useEffect(() => {
		getAllCards(userObj.uid).then((data) => {
			const arr = [];
			data.forEach((doc) => {
				arr.push(doc.data());
			});
			setCards(arr);
			setIsLoading(false);
			navigate("/profile/cards");
		});
	}, []);

	return (
		<section className={classes.cards}>
			{cards.length === 0 && (
				<h4 className={classes.nocards}>There are no cards yet</h4>
			)}
			{isLoading && <div className={classes.spinner}></div>}
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
