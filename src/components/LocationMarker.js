import React from 'react';
import '../css/main.css';

const LocationMarker = ({ text }) => {
	const iconStyle = {
		fontSize: '1.2rem',
		color: 'dodgerblue',
	};

	const showUserInfo = () => {
		return <p>{text}</p>;
	};
	const removeUserInfo = () => {
		console.log('Leaving user info');
	};

	return (
		<div onMouseEnter={() => showUserInfo()} onMouseLeave={() => removeUserInfo()}>
			<i className="fas fa-user" style={iconStyle} />
		</div>
	);
};

export default LocationMarker;
