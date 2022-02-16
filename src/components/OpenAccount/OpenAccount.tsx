import React from 'react';
import './openAccount.scss';
import bg from '../../assets/images/tech-fn.jpg';

const OpenAccount = () => {
	return (
		<div className='openAccount' style={{backgroundImage: `url(${bg})`}}>
			<div className='openAccount__bg'>
				<div className='openAccount__bg-title'>
					<div>Buy and sell</div>
					<div>cryptocurrency in minutes</div>
				</div>
				<div className='openAccount__bg-text'>
					Transparent, Reliable, Innovative.
				</div>
				<div className='openAccount__bg-btn'>
					<button className='openAccount__bg-btn-open'>Open account</button>
					<button className='openAccount__bg-btn-markets'>Go to markets</button>
				</div>
			</div>
		</div>
	);
};

export default OpenAccount;
