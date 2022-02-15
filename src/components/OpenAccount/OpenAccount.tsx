import React from 'react';
import './openAccount.scss';
import bg from '../../assets/images/tech-fn.jpg';

const OpenAccount = () => {
	return (
		<div className='openAccount' style={{backgroundImage: `url(${bg})`}}>
			<div className='openAccount-bg1'>
				{/*<div className='openAccount-bg1'>*/}
				<div>Buy and sell</div>
				<div>cryptocurrency in minutes</div>
				<div>Transparent, Reliable, Innovative.</div>
				<div>
					<button>Open account</button>
					<button>Go to markets</button>
				</div>
			</div>
		</div>
	);
};

export default OpenAccount;
