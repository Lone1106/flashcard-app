import Card from "./Card";

import classes from "./Cards.module.css";

function Cards({ data }) {
	return (
		<section className={classes.cards}>
			{data.map((item) => {
				return <Card displayText={item.front} key={item.id} id={item.id} />;
			})}
		</section>
	);
}

export default Cards;
