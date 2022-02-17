import React from 'react';
const twitter = require('../../assets/images/twitter.png');
const facebook = require('../../assets/images/facebook.png');
const instagram = require('../../assets/images/instagram.png');
const youTube = require('../../assets/images/youTube.png');
const heart = require('../../assets/images/heart.png');
const coin = require('../../assets/images/coin.png');
const halfCoinL = require('../../assets/images/halfCoinL.png');
const halfCoinR = require('../../assets/images/halfCoinR.png');
const halfCoinB = require('../../assets/images/halfCoinB.png');
const smallCoin = require('../../assets/images/smallCoin.png');
import VectorBtn from '../../assets/images/vectorBtn.svg';
import Chat from '../../assets/images/chat.svg';
import Support from '../../assets/images/support.svg';
import './heart.scss';

const Heart = () => {
	return (
		<div className='heart'>
			<div className='heart__title'>We are always in touch</div>
			<div className='heart__buttons'>
				<button className='heart__buttons-btn-button'>
					<span className='flexCenter'>
						<VectorBtn />
						<span className='ml12'>Telegram</span>
					</span>
				</button>
				<button className='heart__buttons-btn-button'>
					<span className='flexCenter'>
						<Chat />
						<span className='ml12'>Online chat</span>
					</span>
				</button>
				<button className='heart__buttons-btn-button'>
					<span className='flexCenter'>
						<Support />
						<span className='ml12'>Support</span>
					</span>
				</button>
			</div>
			<div className='heart__social'>
				<div className='heart__social-icon'>
					<img src={twitter} width={56} height={56} alt='twitter' />
				</div>
				<div className='heart__social-icon'>
					<img src={facebook} width={56} height={56} alt='facebook' />
				</div>
				<div className='heart__social-icon'>
					<img src={instagram} width={56} height={56} alt='instagram' />
				</div>
				<div className='heart__social-icon'>
					<img src={youTube} width={56} height={56} alt='youTube' />
				</div>
			</div>
			<div className='heart__position-heart'>
				<img src={heart} alt='heart' />
			</div>
			<div className='heart__position-coin'>
				<img src={coin} alt='coin' />
			</div>
			<div className='heart__position-smallCoin'>
				<img src={smallCoin} alt='smallCoin' />
			</div>
			<div className='heart__position-halfCoinL'>
				<img src={halfCoinL} alt='halfCoinL' />
			</div>
			<div className='heart__position-halfCoinR'>
				<img src={halfCoinR} alt='halfCoinR' />
			</div>
			<div className='heart__position-halfCoinB'>
				<img src={halfCoinB} alt='halfCoinB' />
			</div>
		</div>
	);
};

export default Heart;
