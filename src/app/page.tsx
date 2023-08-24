"use client";
import styles from './page.module.css'
import Card, { CardData } from './Card/Card'
import { useState } from 'react';

function getRandomItemInArray<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)]
}

function insertRandomlyIntoArray<T>(array: T[], item: T) {
	const index = Math.floor(Math.random() * array.length)
	array.splice(index, 0, item)
}

const colours = [
	'red',
	'blue',
	'green',
	'yellow',
	'aquamarine',
	'purple',
]

export default function Home() {
	const [cards, setCards]=useState<CardData[]>([]);
	const [index, setIndex] = useState(0);
const [activeIndex, setActiveIndex] = useState(0);

	const addItem = () => {
		setIndex(index + 1);
		const newCard = { title: index, backgroundColor: getRandomItemInArray(colours), description: 'Lorem' };
		const clonedArray = [...cards];
		insertRandomlyIntoArray(clonedArray, newCard);
		setCards(clonedArray)
	}

	return (
		<main className={styles.main}>
			<button onClick={addItem}>Add Card</button>
			<div className={styles.cards}>
				{cards.map((card, idx) => {
					return <div key={card.title} onClick={()=>setActiveIndex(idx)}><Card active={idx===activeIndex} {...card} /></div>
				})}
			</div>
		</main>
	)
}
