import { combineReducers } from 'redux';
import albums from './albums';
import search from './search';
import player from './player';

export default combineReducers({
  albums,
  search,
  player,
});
