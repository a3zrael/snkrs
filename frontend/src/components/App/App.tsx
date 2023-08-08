import './App.module.scss';

import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Swiper from '../Swiper/Swiper';
import Content from '../Content/Content';
import Basket from '../Basket/Basket';
import axios from 'axios';

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
		func1();
		func2();
	}, []);

	const func1 = () => {
		axios
			.get('https://64c1236cfa35860baea00c5e.mockapi.io/items')
			.then((res) => {
				setItems(res.data);
			});
	};

	const func2 = () => {
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
// сделать лоадер на трай кетч с стейтом 
	const onRemoveItemBasket = (id: number) => {
		axios.delete(`https://64c1236cfa35860baea00c5e.mockapi.io/basket/${id}`).then(() => func2())
	};

	return (
		<>
			<Header onClickBasket={() => setBasketOpened(true)} />
			<Swiper />
			<Content items={items} onAddToBasket={onAddToBasket} />
			{basketOpened ? (
				<Basket
					onRemove={onRemoveItemBasket}
					onCloseBasket={() => setBasketOpened(false)}
					items={cardItems}
				/>
			) : null}
		</>
	);
};

export default App;
