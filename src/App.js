import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
	const themeHook = useState('purple');
	return (
		<React.StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<header>
					<Link to="/">Adopt Me!</Link>
				</header>
				<Router>
					<SearchParams path="/" />
					<Details path="/details/:id" />
				</Router>
			</ThemeContext.Provider>
		</React.StrictMode>
	);
};

render(<App />, document.getElementById('root'));
