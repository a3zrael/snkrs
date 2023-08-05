import './App.module.scss';

import { useState, useEffect } from 'react';

import Header from '../header/header';
import Swiper from '../swiper/swiper';
import Content from '../content/content';
import Basket from '../basket/basket';
import axios from 'axios';

// interface ItemCardProps {
// 	setItemsBasket: any;
// }

const App = () => {
	const [basketOpened, setBasketOpened] = useState(false);
	const [cardItems, setCardItems] = useState<any>([]);


	const [items, setItems] = useState<
		{
			img: string;
			name: string;
			price: number;
		}[]
	>([]);

	useEffect(() => {
		axios
			.get('https://64c1236cfa35860baea00c5e.mockapi.io/items')
			.then((res) => {
				setItems(res.data);
			});

		getBasketCards();
	}, []);

	const getBasketCards = () => {
		axios
			.get('https://64c1236cfa35860baea00c5e.mockapi.io/basket')
			.then((res) => {
				setCardItems(res.data);
			});
	};

	const onAddToBasket = (obj: any) => {
		axios.post('https://64c1236cfa35860baea00c5e.mockapi.io/basket', obj);
		setCardItems((prev: any) => [...prev, obj]);
	};

	const onRemoveItemBasket = (id: number) => {
		// axios
		// 	.delete(`https://64c1236cfa35860baea00c5e.mockapi.io/basket/${id}`)			
		console.log('deled');
		
	};


	return (
		<>
			<Header onClickBasket={() => setBasketOpened(true)} />
			<Swiper />
			<Content
				items={items}
				onAddToBasket={onAddToBasket}
			/>
			{basketOpened ? (
				<Basket
					onRemoveItemBasket={onRemoveItemBasket}
					onCloseBasket={() => setBasketOpened(false)}
					items={cardItems}
				/>
			) : null}
		</>
	);
};

export default App;
