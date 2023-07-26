import './App.module.scss';

import { useState } from 'react';

import Header from '../Header/Header';
import Swiper from '../Swiper/Swiper';
import Content from '../Content/Content';
import Basket from '../Basket/Basket';

const App = () => {

	const [basketOpened, setBasketOpened] = useState(false)

	return (
		<>
			<Header onClickBasket={() => setBasketOpened(true)}/>
			<Swiper />
			<Content />
			{basketOpened ? <Basket onCloseBasket={() => setBasketOpened(false)}/> : null}
		</>
	);
};

export default App;

//TODO Посмотреть видос по TS