import React from 'react';
const step1 = require('../../assets/images/step1.png');
const step2 = require('../../assets/images/step2.png');
const step3 = require('../../assets/images/step3.png');
import './cryptoStep.scss';
const CryptoStep = () => {
	return (
		<div className='cryptoStep'>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<div className='cryptoStep__title'>IT'S EASY TO BUY CRYPTOCURRENCY</div>
			<div className='cryptoStep__text'>
				Buy bitcoin and other altcoins in a couple of clicks - no special
				knowledge required
			</div>
			<div className='cryptoStep__steps'>
				<div className='cryptoStep__steps-item'>
					<div className='cryptoStep__steps-item-svg'>
						<img src={step1} alt='step1' />
					</div>
					<div className='cryptoStep__steps-item-title'>Step 1</div>
					<div className='cryptoStep__steps-item-text1'>
						Register! Take the first step
					</div>
					<div className='cryptoStep__steps-item-text2'>
						to cryptocurrency trading
					</div>
				</div>
				<div className='cryptoStep__steps-item'>
					<div className='cryptoStep__steps-item-svg'>
						<img src={step2} alt='step2' />
					</div>
					<div className='cryptoStep__steps-item-title'>Step 2</div>
					<div className='cryptoStep__steps-item-text1'>
						Top up your balance by any
					</div>
					<div className='cryptoStep__steps-item-text2'>means</div>
				</div>
				<div className='cryptoStep__steps-item'>
					<div className='cryptoStep__steps-item-svg'>
						<img src={step3} alt='step3' />
					</div>
					<div className='cryptoStep__steps-item-title'>Step 3</div>
					<div className='cryptoStep__steps-item-text1'>
						Select the desired currency
					</div>
					<div className='cryptoStep__steps-item-text2'>
						and create an order
					</div>
				</div>
			</div>
		</div>
	);
};

export default CryptoStep;
