import * as types from '../types';

const initialState = {
    userName: 'WelcomeUnick',
    win: 0,
    loose: 0,
  }

export default (state = initialState, action) => {
console.log("action??", action)
  switch (action.type) {
    case types.SET_USER_NAME:
      return { ...state,  ...action.payload};
    default:
      return state;
  }
};