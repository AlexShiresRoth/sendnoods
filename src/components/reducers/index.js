import { combineReducers } from 'redux';
import mode from './mode';
import favorites from './favorites';
import restaurants from './restuarants';
import errors from './errors';

export default combineReducers({
	mode,
	favorites,
	restaurants,
	errors,
});
