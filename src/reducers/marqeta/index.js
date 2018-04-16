import { combineReducers } from 'redux'

import * as types from 'constants/actionTypes.js'

import login from './login';
import balances from './balances';

const marqetaReducer = combineReducers({
  login,
  balances,
});

export default marqetaReducer;
