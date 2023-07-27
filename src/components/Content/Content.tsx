import './Content.scss';
import lupa from './img/lupa.svg';
import ItemCard from '../ui/itemCard/itemCard.tsx';
import { snkrData } from './content.data.tsx';

const Content = () => {
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
				{snkrData.map((obj) => (
					<ItemCard cros={obj.img} name={obj.name} price={obj.price} />
				))}
			</div>
		</div>
	);
};

export default Content;
