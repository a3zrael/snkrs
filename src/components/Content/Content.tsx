import './Content.scss';
import lupa from './img/lupa.svg';
import ItemCard from '../ui/itemCard/itemCard.tsx';
import { useEffect, useState } from 'react';

interface ItemCardProps {
	setItemsBasket: any;
}

const Content = ({ setItemsBasket }: ItemCardProps) => {
	const [items, setItems] = useState<
		{
			img: string;
			name: string;
			price: number;
		}[]
	>([]);

	useEffect(() => {
		fetch('https://64c1236cfa35860baea00c5e.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddToBasket = (obj: any) => {
		setItemsBasket((prev: any) => [...prev, obj]);
	};

	return (
		<div className="section__content">
			<div className="search">
				<h3 className="title">Все кроссовки</h3>
				<div className="box__input">
					<img src={lupa} alt="" />
					<input type="text" placeholder="Поиск..." />
				</div>
			</div>
			<div className="wrap_snkrs">
				{items.map((item) => (
					<ItemCard
						img={'./src/img/' + item['img'] + '.svg'}
						name={item.name}
						price={item.price}
						onPlus={(obj) => {
							onAddToBasket(obj);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Content;
