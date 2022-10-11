import { useState, useEffect } from "react";
import { getAllCards } from "../firebase/Firebase";

import classes from "./Study.module.css";

function Study({ userObj }) {
	const [cards, setCards] = useState([]);
	const cardsLength = cards.length;
	const [backText, setBackText] = useState();

	const revealBack = () => {
		setBackText("Backside text");
	};

	const wrongAnswer = () => {};

	const correctAnswer = () => {};

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
		<section className={classes.study}>
			<div className={classes.counter}>
				<p>Cards Amount: {cardsLength}</p>
			</div>

			<div className={classes.top}>
				<p className={classes.frontside}>Frontside text</p>
				<p className={classes.backside}>{backText}</p>
			</div>

			<div className={classes.bottom}>
				<button className={classes.buttonF} onClick={wrongAnswer}>
					False
				</button>
				<button className={classes.buttonRe} onClick={revealBack}>
					Reveal
				</button>
				<button className={classes.buttonR} onClick={correctAnswer}>
					Right
				</button>
			</div>
		</section>
	);
}

export default Study;
