import React, { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import SearchParams from './components/SearchParams';
import ThemeContext from './components/ThemeContext';

const Details = lazy(() => import('./components/Details'));

const App = () => {
  const themeHook = useState('purple');
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <header>
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
