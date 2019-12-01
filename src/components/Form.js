import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleMode } from './actions/mode';
import '../css/main.css';

const Form = ({ formDefault, formChange, toggleMode, formValue, onClick }) => {
	const [mode, setMode] = useState(false);
	const restaurantQuery = event => {
		formDefault(event);
	};

	const getInput = event => {
		formChange(event);
	};

	const onToggle = () => {
		setMode(!mode);
		toggleMode(!mode);
	};

	return (
		<div className={mode ? 'form__container dark' : ' form__container '}>
			<div className="logo__container">
				<h1>Send N</h1>
				<img
					src="https://res.cloudinary.com/snackmanproductions/image/upload/v1575230604/ramenapp/ramen_ffcqwy.png"
					alt="Ramen Bowl Logo"
				/>
				<img
					src="https://res.cloudinary.com/snackmanproductions/image/upload/v1575230604/ramenapp/ramen_ffcqwy.png"
					alt="Ramen Bowl Logo"
				/>
				<h1>ds</h1>
			</div>
			<div className="form__container--search">
				<button className="clear__btn" onClick={onClick}>
					<i className="fas fa-window-close" />
				</button>
				<form onSubmit={restaurantQuery}>
					<div className="input__row">
						<input
							className="input__row--input"
							type="text"
							value={formValue}
							onChange={getInput}
							placeholder="Enter a City, Town or State"
						/>
						<button className="search__btn" onSubmit={restaurantQuery}>
							<i className="fas fa-search" />
						</button>
					</div>
				</form>
			</div>
			<div className="form__container--dark-theme-toggle">
				<button
					onClick={() => onToggle()}
					className={
						mode ? 'form__container--dark-theme-toggle--dark' : 'form__container--dark-theme-toggle--light'
					}
				>
					<i className="far fa-lightbulb"></i>
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		mode: state.mode,
	};
};

export default connect(mapStateToProps, { toggleMode })(Form);
