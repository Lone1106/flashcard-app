import { useState, useEffect } from "react";
import { getAllCards } from "../firebase/Firebase";

import classes from "./Study.module.css";

function Study({ userObj }) {
	const [cards, setCards] = useState([]);
	const backIsHidden = `${classes.backside}`;
	const backIsVisible = `${classes.backside} ${classes.visible}`;
	const [backVis, setBackVis] = useState(backIsHidden);
	const DUMMY = [{ frontside: "", backside: "" }];
	let currCard = cards.length === 0 ? DUMMY : cards[0];
	let cardCount = cards.length === 0 ? 0 : cards.length;

	useEffect(() => {
		getAllCards(userObj.uid).then((data) => {
			const arr = [];
			data.forEach((doc) => {
				arr.push(doc.data());
			});
			setCards(arr);
		});
	}, []);

	const revealBack = () => {
		setBackVis(backIsVisible);
	};

	const wrongAnswer = () => {
		setBackVis(backIsHidden);
		setCards((prevData) => {
			let newData = [...prevData];
			newData.push(newData.shift());
			return [...newData];
		});
	};

	const correctAnswer = () => {
		setBackVis(backIsHidden);
		setCards((prevData) => {
			let newData = prevData.filter((e, i) => i !== 0);
			return [...newData];
		});
	};

	return (
		<section className={classes.study}>
			{cardCount === 0 && <p className={classes.done}>No more cards</p>}

			{cardCount >= 1 && (
				<div className={classes.counter}>
					<p>Cards: {cardCount}</p>
				</div>
			)}

			{cardCount >= 1 && (
				<div className={classes.top}>
					<p className={classes.frontside}>{currCard.frontside}</p>
					<p className={backVis}>{currCard.backside}</p>
				</div>
			)}

			{cardCount >= 1 && (
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
			)}
		</section>
	);
}

export default Study;
