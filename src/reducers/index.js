import { combineReducers } from 'redux';
import moods from './moodsReducer';
import game from './gameReducer';

export default combineReducers({
  moods,
  game
});
