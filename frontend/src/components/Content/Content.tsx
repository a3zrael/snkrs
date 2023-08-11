import './Content.scss';
import lupa from './img/lupa.svg';
import krest from './img/krest.svg';
import ItemCard from '../ui/itemCard/itemCard.tsx';
import { useState } from 'react';


interface ContentProps {
	onAddToBasket: (value:{}) => void;
	items: any;
}

const Content = ({ items, onAddToBasket,  }: ContentProps) => {

	const [searchValue, setSearchValue] = useState('');
	
	return (
		<div className="section__content">
			<div className="search">
				<h3 className="title">
					{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
				</h3>
				<div className="box__input">
					<img className="lupa" src={lupa} alt="" />
					{searchValue && (
						<img
							className="clear"
							src={krest}
							onClick={() => setSearchValue('')}
						/>
					)}
					<input
						onChange={(event: any) => {
							setSearchValue(event.target.value);
						}}
						type="text"
						placeholder="Поиск..."
						value={searchValue}
					/>
				</div>
			</div>
			<div className="wrap_snkrs">
				{items
					.filter((item: any) => item.name.toLowerCase().includes(searchValue))
					.map((item: any, index: any) => (
						<ItemCard
							key={index}
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
