import React from 'react';
import Line from '../../assets/images/Line.svg';
const prod1 = require('../../assets/images/prod1.png');
const prod2 = require('../../assets/images/prod2.png');
const prod3 = require('../../assets/images/prod3.png');
import './details.scss';

const Details = () => {
	return (
		<div className='details'>
			<div className='details__title'>several ways to get cryptocurrency</div>
			<div className='details__text'>
				Buy bitcoin and other altcoins in a couple of clicks - no special
				knowledge required
			</div>
			<div className='details__cards'>
				<div className='details__cards-item'>
					<div className='details__cards-item-title'>Buy with</div>
					<div className='details__cards-item-text'>Visa/MasterCard</div>
					<div className='details__cards-item-context'>
						Safe and fast way to get cryptocurrency
					</div>
					<div className='details__cards-item-btn'>
						<button className='details__cards-item-btn-button'>
							Open account
						</button>
					</div>
				</div>
				<div className='details__cards-item'>
					<div className='details__cards-item-title'>Buy crypto</div>
					<div className='details__cards-item-text'>Commission always 0%</div>
					<div className='details__cards-item-context'>
						Safe and fast way to get cryptocurrency
					</div>
					<div className='details__cards-item-btn'>
						<button className='details__cards-item-btn-button'>Buy now</button>
					</div>
				</div>
			</div>
			<div className='details__advantages'>
				<div className='details__advantages-title'>Our advantages</div>
				<div className='details__advantages-block'>
					<div className='details__advantages-block-item'>
						<div className='details__advantages-block-item-title'>
							Trusted partners
						</div>
						<div className='details__advantages-block-item-text'>
							The qMall partner, which has been leading the market for decades,
							is the Ukrainian bank IBox. Together we have developed a bank card
							for cryptocurrency transactions.
						</div>
					</div>

					<div className='details__advantages-block-line'>
						<Line />
					</div>
					<div className='details__advantages-block-item'>
						<div className='details__advantages-block-item-title'>
							Trusted partners
						</div>

						<div className='details__advantages-block-item-text'>
							The qMall partner, which has been leading the market for decades,
							is the Ukrainian bank IBox. Together we have developed a bank card
							for cryptocurrency transactions.
						</div>
					</div>
					<div className='details__advantages-block-line'>
						<Line />
					</div>

					<div className='details__advantages-block-item'>
						<div className='details__advantages-block-item-title'>
							Trusted partners
						</div>

						<div className='details__advantages-block-item-text'>
							The qMall partner, which has been leading the market for decades,
							is the Ukrainian bank IBox. Together we have developed a bank card
							for cryptocurrency transactions.
						</div>
					</div>
				</div>
				<div className='details__advantages-btn'>
					<button className='details__advantages-btn-button'>
						Start trading
					</button>
				</div>
			</div>
			<div className='details__products'>
				<div className='details__products-title'>Our products</div>
				<div className='details__products-text'>
					Buy bitcoin and other altcoins in a couple of clicks - no special
					knowledge required
				</div>
				<div className='details__products-block'>
					<div className='details__products-block-item'>
						<div className='flexCenter'>
							<div className='details__products-block-item-icon'>
								<img src={prod1} alt='prod1' />
							</div>
						</div>

						<div className='details__products-block-item-wrap'>
							<div className='details__products-block-item-wrap-title'>
								qMall LaunchPad
							</div>
							<div className='details__products-block-item-wrap-text'>
								Platform for launching cryptocurrency projects. Buy the digital
								assets of a project first and get the benefits of investing
								early.
							</div>
						</div>
					</div>
					<div className='details__products-block-item'>
						<div className='flexCenter'>
							<div className='details__products-block-item-icon'>
								<img src={prod2} alt='prod2' />
							</div>
						</div>

						<div className='details__products-block-item-wrap'>
							<div className='details__products-block-item-wrap-title'>
								qMall LaunchPad
							</div>
							<div className='details__products-block-item-wrap-text'>
								Platform for launching cryptocurrency projects. Buy the digital
								assets of a project first and get the benefits of investing
								early.
							</div>
						</div>
					</div>
					<div className='details__products-block-item'>
						<div className='flexCenter'>
							<div className='details__products-block-item-icon'>
								<img src={prod3} alt='prod3' />
							</div>
						</div>

						<div className='details__products-block-item-wrap'>
							<div className='details__products-block-item-wrap-title'>
								qMall LaunchPad
							</div>
							<div className='details__products-block-item-wrap-text'>
								Platform for launching cryptocurrency projects. Buy the digital
								assets of a project first and get the benefits of investing
								early.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
