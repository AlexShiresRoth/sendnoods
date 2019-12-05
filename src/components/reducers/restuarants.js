import { GET_RESTAURANTS } from '../actions/types';

const initialState = {
	restaurants: [],
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_RESTAURANTS:
			return {
				...state,
				restaurants: payload,
			};
		default:
			return state;
	}
};
