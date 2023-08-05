import './itemBasket.scss';
import cancel from './img/krest.svg';

interface itemBasketProps {
	name: string;
	img: string;
	price: number;
	onRemoveItemBasket:() => void
}

const itemBasket = ({ name, img, price,onRemoveItemBasket }: itemBasketProps) => {
	return (
		<div className="wrap_card">
			<img className="snkr" src={img} alt="" />
			<div className="info">
				<p>{name}</p>
				<div className="price">{price} руб.</div>
			</div>

			<button onClick={() => onRemoveItemBasket(id)}>
				<img className="last__cancel" src={cancel} alt="" />
			</button>
		</div>
	);
};

export default itemBasket;
