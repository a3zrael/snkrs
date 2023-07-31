import './App.module.scss';

import { useState } from 'react';

import Header from '../header/header';
import Swiper from '../swiper/swiper';
import Content from '../content/content';
import Basket from '../basket/basket';

const App = () => {
	const [basketOpened, setBasketOpened] = useState(false);
	const [cardItems, setCardItems] = useState();

	return (
		<>
			<Header onClickBasket={() => setBasketOpened(true)} />
			<Swiper />
			<Content />
			{basketOpened ? (
				<Basket
					onCloseBasket={() => setBasketOpened(false)}
					items={cardItems}
				/>
			) : null}
		</>
	);
};

export default App;

//TODO Посмотреть видос по TS
