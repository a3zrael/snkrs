import './App.module.scss';

import Header from '../Header/Header';
import Swiper from '../Swiper/Swiper';
import Content from '../Content/Content';
import Basket from '../Basket/Basket';

const App = () => {
	return (
		<>
			<Header />
			<Swiper />
			<Content />
			{/* <Basket /> */}
		</>
	);
};

export default App;
