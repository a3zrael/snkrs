import './button.scss';
interface ButtonProps {
	value: string;
	imgFirls?: string;
	imgLast?: string;
	onClick: any
}

const button = ({ value, imgFirls, imgLast, onClick }: ButtonProps) => {
	return (
		<button onClick={onClick}>
			<img src={imgFirls} alt="" /> {value} <img src={imgLast} alt="" />
		</button>
	);
};

export default button;
