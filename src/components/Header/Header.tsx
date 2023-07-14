import './Header.module.scss';

const Header = () => {
	return (
		<div className="section-header">
			<div className="left__box">
				<img src="./img/logo" alt="logo" />
				<div className="titles">
					<span>REACT SNEAKERS</span>
					<span>Магазин лучших кроссовок</span>
				</div>
			</div>
			<div className="right__box">
				<div className="basket">
					<img src="" alt="basket" />
					<span className="total"></span>
				</div>
				<div className="liked">
					<img src="" alt="liked" />
				</div>
				<div className="profile">
					<img src="" alt="profile" />
				</div>
			</div>
		</div>
	);
};

export default Header;
