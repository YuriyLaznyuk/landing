import React from 'react';
import Vector from '../../assets/images/Vector.svg';
import En from '../../assets/images/En.svg';
import Lightning from '../../assets/images/Lightning.svg';
import User from '../../assets/images/User.svg';
import './header.scss';
const Header = () => {
	return (
		<div className='header'>
			<div className='header__trade'>
				<div className='header__trade-item'>
					Trade
					<Vector className='svgLeft' />
				</div>
				<div className='header__trade-item'>Additions</div>
				<div className='header__trade-item'>
					Markets <span className='header__trade-item-soon'>soon</span>
				</div>
				<div className='header__trade-item'>
					Airdrop
					<span className='header__trade-item-lightning'>
						<Lightning />
					</span>
				</div>
				<div className='header__trade-item'>
					<span>About&nbsp;Us</span>
				</div>
				<div className='header__trade-item'>Support</div>
			</div>
			<div className='header__setting'>
				<div className='header__setting-item'>
					Pause <Vector className='svgLeft' />
				</div>
				<div className='header__setting-item'>
					Orders <Vector className='svgLeft' />
				</div>
				<div className='header__setting-item'>
					<En className='svgRight' />
					English <Vector className='svgLeft' />
				</div>
				<div className='header__setting-item'>
					<span className='header__trade-item-user'>
						<User />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
