import React from 'react';
import './app.scss';
import Header from './components/Header/Header';
import OpenAccount from './components/OpenAccount/OpenAccount';
import Cards from './components/Cards/Cards';
import CryptoStep from './components/CryptoStep/CryptoStep';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<main className='main'>
				<OpenAccount />
				<Cards />
				<CryptoStep />
			</main>
		</div>
	);
};

export default App;
