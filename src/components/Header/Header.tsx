import './Header.scss';
import logo from './img/logo.svg';
import basket from './img/basket.svg';
import liked from './img/liked.svg';
import profile from './img/profile.svg';

interface HeaderProps {
	onClickBasket: string;
}

const Header = ({ onClickBasket }: HeaderProps) => {
	return (
		<div className="section__header">
			<div className="container">
				<div className="wrap__header">
					<div className="left__box">
						<img src={logo} alt="logo" />
						<div className="titles">
							<span className="titile_snk">REACT SNEAKERS</span>
							<span className="titile_ru">Магазин лучших кроссовок</span>
						</div>
					</div>
					<div className="right__box">
						<div className="basket" onClick={onClickBasket}>
							<img src={basket} alt="basket" />
							<span className="total">1500 rub</span>
						</div>
						<img src={liked} alt="liked" />
						<img src={profile} alt="profile" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
