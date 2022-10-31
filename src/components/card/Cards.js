import { getAllCards } from "../firebase/Firebase";
import { useState, useEffect } from "react";
import Card from "./Card";

import classes from "./Cards.module.css";

function Cards({ userObj }) {
	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getAllCards(userObj.uid).then((data) => {
			const arr = [];
			data.forEach((doc) => {
				arr.push(doc.data());
			});
			setCards(arr);
			setIsLoading(false);
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
						userObj={userObj}
					/>
				);
			})}
		</section>
	);
}

export default Cards;
