import { SET_MODE } from '../actions/types';

const initialState = {
	mode: false,
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_MODE:
			return {
				...state,
				mode: payload,
			};
		default:
			return state;
	}
};
