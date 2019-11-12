export const getCoffees = state => state.coffees;
export const getSnacks = state => state.snacks;
export const getNaps = state => state.naps;
export const getStudies = state => state.studies;

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '😵';
  if(isHyper(state) && isHungry(state)) return '🤣';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '😯';
  if(isHungry(state)) return '😡';

  return '😀';
};
