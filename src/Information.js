import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const Information = () => {
	const [isActive, setisActive] = useLocalStorage('isActive', true);

	const hideAlert = () => {
		setisActive(false);
	};

	if (isActive) {
		return (
			<div className="information" role="alert">
				<h4>
					The API changed and now you need to allow HTTP requests.{' '}
					<a href="https://github.com/demetrio/adopt-me#-problem-with-the-api">More info here.</a>
				</h4>

				<button className="circle fromMiddle" data-animation="magnify" data-remove="3000" onClick={() => hideAlert()}>
					<span></span>
				</button>
			</div>
		);
	}
	return <div />;
};

export default Information;
