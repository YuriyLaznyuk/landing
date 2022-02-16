import React from 'react';
import './app.scss';
import Header from './components/Header/Header';
import OpenAccount from './components/OpenAccount/OpenAccount';
import Cards from './components/Cards/Cards';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<main className='main'>
				<OpenAccount />
				<Cards />
			</main>
		</div>
	);
};

export default App;
