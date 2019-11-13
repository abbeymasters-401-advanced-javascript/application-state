import { SAVE_GAME } from '../actions/moodsActions';

function reducer(state = [], action) {
  switch(action.type) {
    case SAVE_GAME:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default reducer;
