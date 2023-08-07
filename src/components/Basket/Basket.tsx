import './Basket.scss';
import ItemBasket from '../ui/itemBasket/itemBasket';
import Button from '../ui/button/button';
import arro from './img/arro.svg';
import krest from './img/krest.svg';
import box from './img/box.svg';
import { useState } from 'react';

interface BasketProps {
	onCloseBasket: () => void;
	onRemove?: any;
	items: any;
}

const Basket = ({ onCloseBasket, onRemove, items }: BasketProps) => {
	// const [isEmpty, setIsEmpty] = useState<any>([]);

	return (
		<div className="wrap_close">
			<div className="overlay" onClick={onCloseBasket}></div>
			<div className="wrap_basket">
				<div className="titile_close_basket">
					<h3 className="titile_basket">Корзина</h3>
					<button onClick={onCloseBasket}>
						<img src={krest} alt="" />
					</button>
				</div>
				{items != 0 ? (
					<div className="basket">
						<div className="list">
							{items.map((obj: any, index: any) => {
								return (
									<ItemBasket
										key={index}
										img={obj['img']}
										name={obj.name}
										price={obj.price}
										onRemove={() => onRemove(obj.id)}
									/>
								);
							})}
						</div>
						<div className="wrap_info">
							<div className="item">
								<p>Итого:</p>
								<div className="border_1"></div>
								<span>21 498 руб.</span>
							</div>
							<div className="item">
								<p>Налог 5%:</p>
								<div className="border_1"></div>
								<span>1074 руб.</span>
							</div>
							<div className="item item_btn">
								<Button value="Оформить заказ" imgLast={arro} />
							</div>
						</div>
					</div>
				) : (
					<div className="empty_basket">
						<img src={box} alt="" />
						<h3 className="item">Корзина пустая</h3>
						<p className="item">
							Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
						</p>
						<Button
							value="Вернуться назад"
							onClick={onCloseBasket}
							imgFirls={arro}
						/>
					</div>
				)}

				{/* <div className="complete_basket">
                        <img src={compl} alt="" />
                        <h3 className='item'>Заказ оформлен!</h3>
                        <p className='item'>Ваш заказ #18 скоро будет передан курьерской доставке.</p>
                        <Button value='Вернуться назад' imgFirls={arro}/>
                    </div> */}
			</div>
		</div>
	);
};

export default Basket;
