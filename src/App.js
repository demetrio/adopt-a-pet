import React, { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';
import Information from './Information';

const Details = lazy(() => import('./Details'));

const App = () => {
	const themeHook = useState('purple');
	return (
		<React.StrictMode>
			<ThemeContext.Provider value={themeHook}>
				<header>
					<Information />
					<Link to="/">Adopt Me!</Link>
				</header>
				<Suspense fallback={<h1>loading ...</h1>}>
					<Router>
						<SearchParams path="/" />
						<Details path="/details/:id" />
					</Router>
				</Suspense>
			</ThemeContext.Provider>
		</React.StrictMode>
	);
};

render(<App />, document.getElementById('root'));
