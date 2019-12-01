export const toggleMode = mode => async dispatch => {
	dispatch({
		type: 'SET_MODE',
		payload: await mode,
	});
};
