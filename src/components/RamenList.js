import React from 'react';
import RestaurantListItem from './RestaurantListItem';
import { connect } from 'react-redux';

import '../css/main.css';

const RamenList = ({ mode, restaurants, loading, addFavorite, favorites }) => {
	const ramenPhotoArray = [
		'https://res.cloudinary.com/snackmanproductions/image/upload/v1575230606/ramenapp/ramen2_svetmw.jpg',
		'https://res.cloudinary.com/snackmanproductions/image/upload/v1575230605/ramenapp/ramen1_p31dyo.jpg',
		'https://res.cloudinary.com/snackmanproductions/image/upload/v1575230604/ramenapp/ramen0_viyjpe.jpg',
	];

	const ramenSpots = restaurants.map((spot, i) => {
		return (
			<RestaurantListItem
				id={i}
				lat={spot.geometry.location.lat}
				lng={spot.geometry.location.lng}
				spot={spot}
				rating={spot.rating}
				ratingTotal={spot.user_ratings_total}
				price={spot.price_level}
				photos={ramenPhotoArray}
				open={spot.opening_hours ? spot.opening_hours.open_now : (spot.opening_hours = { open_now: 'n/a' })}
				addFavorite={addFavorite}
				isFavorited={favorites}
			/>
		);
	});

	if (loading && restaurants.length < 1) {
		return (
			<div className={mode.mode ? 'ramen__list--container dark' : ' ramen__list--container'}>
				<div className="loader-container">
					<div className="loader" />
				</div>
			</div>
		);
	}

	if (!loading && restaurants.length > 0) {
		return (
			<div className={mode.mode ? 'ramen__list--container dark' : ' ramen__list--container'}>
				<div className="ramen--list">{ramenSpots}</div>
			</div>
		);
	}

	return (
		<div className={mode.mode ? 'ramen__list--container dark' : ' ramen__list--container'}>
			<div
				className={mode.mode ? 'ramen__list--container--enter dark' : 'ramen__list--container--enter'}
				style={{ background: `${mode.mode ? '#303030' : '#f3f3f3'}` }}
			>
				<img
					src="https://res.cloudinary.com/snackmanproductions/image/upload/v1575235767/ramenapp/logo_transparent_background_u1e44m.png"
					alt="Send Noods Logo"
					className="logo"
				/>
				<p style={{ color: `${mode.mode ? '#777' : '#999'}` }}>
					Search for a restaurant and results will show up here
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		mode: state.mode,
		favorites: state.favorites,
	};
};

export default connect(mapStateToProps)(RamenList);
