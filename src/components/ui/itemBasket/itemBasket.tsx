import './itemBasket.scss';
import cros from './img/cros1.svg';
import cancel from './img/krest.svg';

interface itemBasketProps {
	name: string,
	cros: string,
	price: number,
}

const itemBasket = ({name, cros, price} : itemBasketProps) => {
	return (
		<div className="wrap_card">
			<img className="snkr" src={cros} alt="" />
			<div className="info">
				<p>{name}</p>
				<div className="price">{price} руб.</div>
			</div>

			<button>
				<img className="last__cancel" src={cancel} alt="" />
			</button>
		</div>
	);
};

export default itemBasket;
