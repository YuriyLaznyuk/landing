import React from 'react';
import Header from './components/Header/Header';
import OpenAccount from './components/OpenAccount/OpenAccount';
import Cards from './components/Cards/Cards';
import CryptoStep from './components/CryptoStep/CryptoStep';
import Details from './components/Details/Details';
import Heart from './components/Heart/Heart';
import Footer from './components/Footer/Footer';
import './app.scss';
import './assets/styles/main.scss';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<main className='main'>
				<OpenAccount />
				<Cards />
				<CryptoStep />
				<Details />
				<Heart />
			</main>
			<Footer />
		</div>
	);
};

export default App;
