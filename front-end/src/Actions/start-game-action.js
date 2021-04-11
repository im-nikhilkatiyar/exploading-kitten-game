import * as types from '../types';
import makeCard from '../localState';

export const startGame = () => dispatch => {
  dispatch({ type: types.START_GAME, payload: makeCard() });
};
