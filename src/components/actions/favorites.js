export const addToFavorites = favorite => async dispatch => {
	dispatch({
		type: 'ADD_FAVORITE',
		payload: await favorite,
	});
};
