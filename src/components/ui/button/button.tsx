import './button.scss';
interface ButtonProps {
	value: string;
	imgFirls?: string;
	imgLast?: string;
}

const button = ({ value, imgFirls, imgLast }: ButtonProps) => {
	return (
		<button>
			<img src={imgFirls} alt="" /> {value} <img src={imgLast} alt="" />
		</button>
	);
};

export default button;
