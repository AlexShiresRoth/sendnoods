import React from 'react';

import '../css/main.css';

export const FavoriteList = ({ favorites, removeFavorite, themeMode }) => {
	const Favorites = favorites.map((favorite, i) => {
		const getData = () => {
			return favorite;
		};
		return (
			<li key={i} className={themeMode ? 'favorite__list--item dark-favorite-item' : 'favorite__list--item'}>
				<i className="far fa-times-circle" onClick={e => removeFavorite(e, getData())} />
				<p>
					<a
						href={`https://www.google.com/maps/dir/?api=1&query=${favorite.geometry.location.lat},${favorite.geometry.location.lng}&query_place_id=${favorite.place_id}`}
						alt={favorite.formatted_address}
					>
						{favorite.name}
					</a>
				</p>
			</li>
		);
	});

	return (
		<div>
			<ul className={themeMode ? 'favorite__list dark-favorite' : 'favorite__list'}>{Favorites}</ul>
		</div>
	);
};
