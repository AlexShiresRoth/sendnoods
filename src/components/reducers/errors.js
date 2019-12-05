import { SET_ERROR } from '../actions/types';

const initialState = {
	errors: null,
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_ERROR:
			return {
				...state,
				errors: payload,
			};
		default:
			return {
				...state,
			};
	}
};
