import { combineReducers } from 'redux';
import mode from './mode';
import favorites from './favorites';

export default combineReducers({
	mode,
	favorites,
});
