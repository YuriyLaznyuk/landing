import React from 'react';
import Icon from '../../assets/images/Icon.svg';
import ArrowL from '../../assets/images/ArrowL.svg';
import ArrowR from '../../assets/images/ArrowR.svg';
import ArrowRMin from '../../assets/images/ArrowRMin.svg';
import Frame from '../../assets/images/Frame.svg';
import './cards.scss';

const Cards = () => {
	return (
		<div className='cards'>
			<div className='cards__trade'>
				<div className='cards__trade-card'>
					<div className='cards__trade-card-pair'>GALA / BUSD</div>
					<div className='cards__trade-card-height'>+1.03 %</div>
					<div className='cards__trade-card-rate'>343.56</div>
				</div>
				<div className='cards__trade-card'>
					<div className='cards__trade-card-pair'>BTC/USD</div>
					<div className='cards__trade-card-low'>-1.08%</div>
					<div className='cards__trade-card-rate'>143.56</div>
				</div>
				<div className='cards__trade-card'>
					<div className='cards__trade-card-pair'>ETH/USD</div>
					<div className='cards__trade-card-height'>+1.02 %</div>
					<div className='cards__trade-card-rate'>124.86</div>
				</div>
				<div className='cards__trade-card'>
					<div className='cards__trade-card-pair'>ETH/USD</div>
					<div className='cards__trade-card-height'>+1.02 %</div>
					<div className='cards__trade-card-rate'>124.86</div>
				</div>

				<div className='cards__trade-card-icon'>
					<Icon />
				</div>
			</div>

			<div className='cards__slider'>
				<div className='cards__slider-arrow'>
					<ArrowL />
				</div>
				<div className='cards__slider-card'>
					<Frame />
				</div>
				<div className='cards__slider-card'>
					<Frame />
				</div>
				<div className='cards__slider-card'>
					<Frame />
				</div>
				<div className='cards__slider-card'>
					<Frame />
				</div>
				<div className='cards__slider-arrow'>
					<ArrowR />
				</div>
			</div>
			<div className='cards__slider-text'>
				<div className='cards__slider-text-first'>
					Platform for launching cryptocurrency projects.
				</div>
				<div className='cards__slider-text-second'>Read more</div>
				<div className='cards__slider-text-arrow'>
					<ArrowRMin />
				</div>
			</div>
		</div>
	);
};

export default Cards;
