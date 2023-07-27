import './swiper.scss';
import wrame from './img/img_swiper.svg';
import adidas from './img/adidas.svg';

const Swiper = () => {
	return (
		<div className="section__swiper">
			<div className="wrap__swiper">
				<div className="left">
					<img src={adidas} alt="" />
					<h2 className="titie">
						<span>Stan Smith</span>, Forever!
					</h2>
					<button className="btn">Купить</button>
				</div>
				<img src={wrame} alt="" />
			</div>
		</div>
	);
};
export default Swiper;
