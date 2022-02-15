import React from 'react';
import './app.scss';
import Header from './components/Header/Header';
import OpenAccount from './components/OpenAccount/OpenAccount';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<main className='main'>
				<OpenAccount />
			</main>
		</div>
	);
};

export default App;
