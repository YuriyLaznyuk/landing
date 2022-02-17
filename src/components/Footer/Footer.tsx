import React from 'react';
const logo = require('../../assets/images/logo.png');
import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__top'>
				<div className='footer__top-logo'>
					<div className='footer__top-logo-img'>
						<img src={logo} width={126} height={33} alt='logo' />
					</div>
					<div className='footer__top-logo-text'>2021 © Unio-IT.com</div>
				</div>
				<div className='footer__top-service'>
					<div className='footer__top-service-title'>About Us</div>
					<div className='footer__top-service-text'>About</div>
					<div className='footer__top-service-text'>Community</div>
					<div className='footer__top-service-text'>Terms</div>
					<div className='footer__top-service-text'>Careers</div>
					<div className='footer__top-service-text'>News</div>
				</div>
				<div className='footer__top-service'>
					<div className='footer__top-service-title'>Products</div>
					<div className='footer__top-service-text'>Academy</div>
					<div className='footer__top-service-text'>Charity</div>
					<div className='footer__top-service-text'>Card</div>
					<div className='footer__top-service-text'>Labs</div>
					<div className='footer__top-service-text'>Gift Card</div>
				</div>
				<div className='footer__top-service'>
					<div className='footer__top-service-title'>service</div>
					<div className='footer__top-service-text'>Buy Crypto</div>
					<div className='footer__top-service-text'>BNB</div>
					<div className='footer__top-service-text'>Referral</div>
					<div className='footer__top-service-text'>OTC Trading</div>
					<div className='footer__top-service-text'>Affiliate</div>
				</div>
				<div className='footer__top-service'>
					<div className='footer__top-service-title'>Support</div>
					<div className='footer__top-service-text'>Give Us Feedback</div>
					<div className='footer__top-service-text'>Trading Rules</div>
					<div className='footer__top-service-text'>Referral</div>
					<div className='footer__top-service-text'>Fees</div>
					<div className='footer__top-service-text'>
						Law Enforcement Requests
					</div>
				</div>
			</div>
			<div className='footer__bottom'>
				<div className='footer__bottom-text'>Privacy Policy</div>
				<div className='footer__bottom-text'>Refund Policy</div>
				<div className='footer__bottom-text'>Terms of Service</div>
			</div>
		</div>
	);
};

export default Footer;
