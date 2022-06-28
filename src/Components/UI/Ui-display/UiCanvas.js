import { useRef, useEffect } from 'react';
import { clearCanvas } from '../../HelperFunc';

function Canvas(props) {
	let userText = props.capturedUserText;
	const storageText = props.capturedStorageText;
	const storageStatus = props.storageStatus;

	let delTxtState = props.delTxtState;

	const ctxRef = useRef();

	// console.log(ctxRef);

	useEffect(() => {
		const ctx = ctxRef.current.getContext('2d');
		const metrics = ctx.measureText(userText);

		props.letterHeight(
			Math.floor(metrics.actualBoundingBoxAscent) +
				Math.floor(metrics.actualBoundingBoxDescent)
		);

		const canvasWidth = ctxRef.current.width;
		const canvasHeight = ctxRef.current.height;
		//WRITE and CLEAR canvas here

		if (delTxtState === true) {
			clearCanvas(ctx, canvasWidth, canvasHeight);
		}

		ctx.font = '4rem Tangerine';
		ctx.fillStyle = 'White';

		if (storageText !== null) {
			clearCanvas(ctx, canvasWidth, canvasHeight);
			ctx.fillText(storageText, 0, 50);
		}

		if (storageStatus === false) {
			ctx.fillText(userText, 0, 50);
		}

		if (userText.length === 0) {
			clearCanvas(ctx, canvasWidth, canvasHeight);
		}
	}, [userText, delTxtState, props, storageText, storageStatus]);

	return <canvas id="displayText" ref={ctxRef}></canvas>;
}
export default Canvas;

/**
 * @useRef -  I did not know how to have access to other HTML element living in another component. using useRef i have access to the HTML object of that node.
 */
