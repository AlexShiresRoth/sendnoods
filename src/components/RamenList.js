import React from 'react';
import RestaurantListItem from './RestaurantListItem';
import { connect } from 'react-redux';

import '../css/main.css';

const RamenList = props => {
	const ramenPhotoArray = [
		'https://res.cloudinary.com/snackmanproductions/image/upload/v1575230606/ramenapp/ramen2_svetmw.jpg',
		'https://res.cloudinary.com/snackmanproductions/image/upload/v1575230605/ramenapp/ramen1_p31dyo.jpg',
		'https://res.cloudinary.com/snackmanproductions/image/upload/v1575230604/ramenapp/ramen0_viyjpe.jpg',
	];

	const restaurants = props.restaurants.map((spot, i) => {
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
				addFavorite={props.addFavorite}
				isFavorited={props.favorites}
			/>
		);
	});

	if (props.loading && props.restaurants.length < 1) {
		return (
			<div className={props.mode.mode ? 'ramen__list--container dark' : ' ramen__list--container'}>
				<div className="loader-container">
					<div className="loader" />
				</div>
			</div>
		);
	}

	if (!props.loading && props.restaurants.length > 0) {
		return (
			<div className={props.mode.mode ? 'ramen__list--container dark' : ' ramen__list--container'}>
				<div className="ramen--list">{restaurants}</div>
			</div>
		);
	}

	return <div className={props.mode.mode ? 'ramen__list--container dark' : ' ramen__list--container'} />;
};

const mapStateToProps = state => {
	return {
		mode: state.mode,
		favorites: state.favorites,
	};
};

export default connect(mapStateToProps)(RamenList);
