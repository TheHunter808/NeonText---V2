import { useState } from 'react';
import BtnColor from './BtnColor';

const colorBulbs = [
	{
		colorName: 'Orange',
		colorClass: 'orange',
		key: 1,
		colorCode: 'orange',

		dataActive: false,
	},
	{
		colorName: 'Light Red',
		colorClass: 'lightRed',
		key: 2,
		colorCode: 'rgb(255, 117, 117)',
		dataActive: false,
	},
	{
		colorName: 'Red',
		colorClass: 'red',
		key: 3,
		colorCode: 'red',
		dataActive: false,
	},
	{
		colorName: 'Deep Blue',
		colorClass: 'deepBlue',
		key: 4,
		colorCode: 'rgb(2, 116, 252)',
		dataActive: false,
	},
	{
		colorName: 'Electric Blue',
		colorClass: 'electricBlue',
		key: 5,
		colorCode: 'rgb(99, 170, 255)',
		dataActive: false,
	},
	{
		colorName: 'Tropical Blue',
		colorClass: 'tropicalBlue',
		key: 6,
		colorCode: 'rgb(36, 183, 222)',
		dataActive: false,
	},
	{
		colorName: 'Ice Blue',
		colorClass: 'iceBlue',
		key: 7,
		colorCode: 'rgb(144, 220, 255)',
		dataActive: false,
	},
	{
		colorName: 'Green',
		colorClass: 'green',
		key: 8,
		colorCode: '#20f020',
		dataActive: false,
	},
	{
		colorName: 'Mint Green',
		colorClass: 'mintGreen',
		key: 9,
		colorCode: 'rgb(128, 255, 217)',
		dataActive: false,
	},
	{
		colorName: 'Deep Green',
		colorClass: 'deepGreen',
		key: 10,
		colorCode: 'rgba(14, 185, 14, 0.884)',
		dataActive: false,
	},
	{
		colorName: 'Warm White',
		colorClass: 'warmWhite',
		key: 11,
		colorCode: 'rgb(240, 238, 199)',
		dataActive: false,
	},
	{
		colorName: 'White',
		colorClass: 'white',
		key: 12,
		colorCode: 'rgb(225, 227, 230)',
		dataActive: false,
	},
];

function UiColors(props) {
	const [bulbClicked, setBulbClicked] = useState(null);
	const [hoverActive, sethoverActive] = useState(false);
	const [targetColorCode, setTargetColorCode] = useState(null);
	const [colorActive, setColorActive] = useState(null);

	// const bulbRef = useRef();

	//If mouseHover state is true, get the associated color code and set it, else

	//Mouseenter
	const mouseOverHanlder = (e) => {
		setTargetColorCode(e.target.dataset.colorcode);
		sethoverActive(true);
	};

	//mouseleave
	const mouseOutHandler = (e) => {
		sethoverActive(false);
	};

	//Activating button
	const bulbClickHandler = (e) => {
		if (e.target.localName === 'i') {
			//To stop double click on <i> el
			e.stopPropagation();
			//since i do not have colorCode available on this elelment, I target the parent
			const parentColorCode = e.target.parentElement.dataset.colorcode;
		
			setTargetColorCode(parentColorCode);
			setColorActive(parentColorCode);
			setBulbClicked(true);
		} else {
			setTargetColorCode(e.target.dataset.colorcode);
			setBulbClicked(true);
			setColorActive(e.target.dataset.colorcode);

		}

		// console.log(e.target.dataset.colorcode);
		//getTheColorCode
	};
	// console.log(bulbActive);
// console.log(colorActive);
// console.log(targetColorCode);
	//setting color

	return (
		<section
			className={`ui-input-form color  ${props.navState ? 'ui-active' : ''}`}
		>
			<h3 className="ui-input-form-heading">CHOOSE COLOUR</h3>
			<ul className="ui-input-color-lists">
				{colorBulbs.map((bulb) => {
					const isActive = bulb.colorCode === targetColorCode;

					const isHovered = bulb.colorCode === targetColorCode;

					return (
						<BtnColor
							colorClass={bulb.colorClass}
							key={bulb.key}
							colorCode={bulb.colorCode}
							colorName={bulb.colorName}
							bulbClicked={bulbClicked}
							bulbActive={isActive}
							onMouseOver={mouseOverHanlder}
							onMouseOut={mouseOutHandler}
							targetColor={targetColorCode}
							onClick={bulbClickHandler}
							targetBulb={isHovered}
							hoverActive={hoverActive}
						/>
					);
				})}
			</ul>
		</section>
	);
}
export default UiColors;
