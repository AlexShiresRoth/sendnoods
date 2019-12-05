export const getRestaurants = restaurants => async dispatch => {
	try {
		dispatch({
			type: 'GET_RESTAURANTS',
			payload: await restaurants,
		});
	} catch (error) {
		console.error(error);
		dispatch({
			type: 'SET_ERROR',
			payload: error.response,
		});
	}
};
