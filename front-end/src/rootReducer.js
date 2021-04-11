import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import cardReducer from './Reducer/card-reducer';
import userFormReducer from './Reducer/form-reducer';
export default combineReducers({ card: cardReducer, user: userFormReducer, form : formReducer });
