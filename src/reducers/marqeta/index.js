import { combineReducers } from 'redux'

import * as types from 'constants/actionTypes.js'

import login from './login';

const marqetaReducer = combineReducers({
  login,
});

export default marqetaReducer;
