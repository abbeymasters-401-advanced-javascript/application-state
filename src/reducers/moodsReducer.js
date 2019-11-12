import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, SET_TO_ZERO } from '../actions/moodsActions';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
  face: '',
  actions: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    case TAKE_NAP:
      return { ...state, naps: state.naps + 1 };
    case STUDY:
      return { ...state, studies: state.studies + 1 };
    case SET_TO_ZERO:
      return { coffees: 0, snacks: 0, naps: 0, studies: 0, face: '', actions: [] };
  }
}

export default reducer;
