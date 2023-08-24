import React from 'react';
import styles from './Card.module.css';
export interface CardData{
	title: number;
	description: string;
	backgroundColor: string;
}

const Card = (props: CardData & {active: boolean}) => {
	const firstRender = React.useRef("I was created at " + (new Date()).toTimeString());
	const [count, setCount] = React.useState(0);
	return (
		<div className={styles.card} style={{backgroundColor: props.backgroundColor, color: props.active?"white":"black"}}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<p>{firstRender.current}</p>
			<button onClick={()=>setCount(count+1)}>{count}</button>
		</div>
	);
};

export default Card;