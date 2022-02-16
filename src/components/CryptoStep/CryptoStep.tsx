import React from 'react';
import Step1 from '../../assets/images/Step1.svg';
import Step2 from '../../assets/images/Step2.svg';
import Step3 from '../../assets/images/Step3.svg';
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
						<Step1 />
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
						<Step2 />
					</div>
					<div className='cryptoStep__steps-item-title'>Step 2</div>
					<div className='cryptoStep__steps-item-text1'>
						Top up your balance by any
					</div>
					<div className='cryptoStep__steps-item-text2'>means</div>
				</div>
				<div className='cryptoStep__steps-item'>
					<div className='cryptoStep__steps-item-svg'>
						<Step3 />
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
