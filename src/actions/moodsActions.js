export const DRINK_COFFEE = 'DRINK_COFFEE';
export const EAT_SNACK = 'EAT_SNACK';
export const TAKE_NAP = 'TAKE_NAP';
export const STUDY = 'STUDY';
export const SET_TO_ZERO = 'SET_TO_ZERO';
export const RESET_GAME = 'RESET_GAME';

export const incrementState = (name) => ({
  type: name
});

export const resetGame = () => ({
  type: RESET_GAME
});
