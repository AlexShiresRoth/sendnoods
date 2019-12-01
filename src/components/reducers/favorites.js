import { ADD_FAVORITE } from '../actions/types';

const initialState = {
	favorites: [],
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_FAVORITE:
			return {
				...state,
				favorites: payload,
			};
		default:
			return state;
	}
};
