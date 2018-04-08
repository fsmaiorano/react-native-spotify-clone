import { combineReducers } from 'redux';
import albums from './albums';
import search from './search';

export default combineReducers({
  albums,
  search,
});
