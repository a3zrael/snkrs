import './Content.scss';
import lupa from './img/lupa.svg';
import ItemCard from '../ui/itemCard/itemCard.tsx';
import { useEffect, useState } from 'react';

const Content = () => {

	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://64c1236cfa35860baea00c5e.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

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
				{items.map((obj) => (
					<ItemCard
						cros={'./src/components/content/img/' + obj['img'] + '.svg'}
						name={obj.name}
						price={obj.price}
					/>
				))} 
			</div>
		</div>
	);
};

export default Content;
