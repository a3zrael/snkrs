import './App.module.scss';

import Header from '../Header/Header';
import Swiper from '../Swiper/Swiper';
import Content from '../Content/Content';
import ItemCard from '../ui/itemCard/itemCard';

const App = () => {
	return (
		<>
			<Header />
			<Swiper />
			<Content />
			{/* <ItemCard /> */}
		</>
	);
};

export default App;
