import { createStore } from 'redux';

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
    case 'DRINK_COFFEE':
      return { ...state, coffees: state.coffees + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

