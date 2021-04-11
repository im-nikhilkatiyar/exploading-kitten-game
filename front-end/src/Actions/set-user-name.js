import * as types from '../types';

export const setUserName = (userName, win, loose) => (dispatch, getState) => {
  const {userDetails : {values : {userName}}} = getState().form
  console.log("getstate", getState(), userName)
  dispatch({
    type: types.SET_USER_NAME,
    payload: {
      userName: userName,
      win: win,
      loose: loose
    }
  })
}