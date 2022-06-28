import { useEffect, useState } from 'react';

function UserTextAndBars(props) {
	const [showBars, setShowBars] = useState(false);
	const [width, setWidth] = useState();

	const [displayText, setDisplayText] = useState('Your Text');
	let letterHeight = props.letterHeight;
	let txtState = props.txtState;
	let userText = props.capturedUserText;
	// let storageText = props.storageText;
	let storeText = props.capturedStorageText;
	const storageStatus = props.storageStatus;
	let txtLength = userText.length;

	// `${txtLength * 2} CM`;

	// console.log(storageStatus);
	console.log(showBars);
	useEffect(() => {
		let timerHandler = setTimeout(() => {
			if (txtState === false && storeText === null) {
				setShowBars(false);
				setWidth('');
				setDisplayText('Your Text');
			}

			if (txtState === true || storeText !== null) {
				setShowBars(true);
				setWidth(`${storeText.length * 2}CM`);
				setDisplayText(storeText);
				// console.log(storeText);
			}

			if (userText.length > 0) {
				setDisplayText(userText);
			}

			// if (userText.length === 0 && storeText === null) {
			// 	setDisplayText('Your Text');
			// 	setWidth(``);
			// }

			if (userText.length === 0) {
				setDisplayText('Your Text');
				setWidth(``);
				setShowBars(false);
			}

			if (storageStatus === false && txtState === true) {
				setWidth(`${txtLength * 2} CM`);
			}
		}, 300);

		return () => {
			// console.log('Debouncing CLEARED!');
			clearTimeout(timerHandler);
		};
	}, [txtState, txtLength, storeText, userText, storageStatus]);

	return (
		<>
			<div className="ui-display-userText-wrapper">
				<section
					className={`ui-display-userText-and-bar ${
						showBars ? 'widthActive ' : ''
					}`}
				>
					<p className="ui-display-userText-text neonOn" id="userDisplay">
						{storageStatus && displayText}
						{!storageStatus && userText}
					</p>
				</section>

				{showBars && (
					<div className="measurementBar-height-wrapper">
						<span
							className="measurementBar-height"
							style={{ height: `${letterHeight}px` }}
						></span>
						<span className="measurementBar-height-length">
							{`${Math.floor(letterHeight)}Cm`}
						</span>
					</div>
				)}
			</div>

			<span className="measurementBar-width-length">{showBars && width}</span>
		</>
	);
}
export default UserTextAndBars;
