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
		axios.get('http://localhost:1337/api/items/').then((res) => {
			const result = res.data.data.map((element: any) => ({
				id: element.id,
				img: element.attributes.img,
				name: element.attributes.name,
				price: element.attributes.price,
			}));
			setItems(result);
		});
	};

	const func2 = () => {
		axios.get('http://localhost:1337/api/baskets').then((res) => {
			const result = res.data.data.map((element: any) => ({
				id: element.id,
				img: element.attributes.img,
				name: element.attributes.name,
				price: element.attributes.price,
			}));
			setCardItems(result);
		});
	};

	const onAddToBasket = (obj: any) => {
		axios.post('http://localhost:1337/api/baskets', { data: obj });
		setCardItems((prev: any) => [...prev, obj]);
	};
	// сделать лоадер на трай кетч с стейтом
	const onRemoveItemBasket = (id: number) => {
		axios.delete(`http://localhost:1337/api/basket/${id}`).then(() => func2());
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
