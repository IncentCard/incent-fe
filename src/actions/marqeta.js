import * as types from 'constants/actionTypes';
import makeAPIAction from 'utils/makeAPIAction';
import { MARQETA_BASE_URL } from 'constants/urls';

export function pingMarqeta() {
  return makeAPIAction(types.PING_MARQETA, {
    endpoint: `${MARQETA_BASE_URL}/ping`,
  })
}

export function getUser(id) {
  return makeAPIAction(types.MARQETA_GET_USER, {
    endpoint: `${MARQETA_BASE_URL}/users/${id}`,
  })
}

export function getBalances(id) {
  return makeAPIAction(types.MARQETA_GET_BALANCES, {
    endpoint: `${MARQETA_BASE_URL}/balances/${id}`,
  })
}

export function login(email, password) {
  return makeAPIAction(types.MARQETA_LOGIN, {
    endpoint: `${MARQETA_BASE_URL}/users/auth/login`,
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
}

export function pingThenGetUser(id) {
  return (dispatch) => {
    console.log('start ping then get');
     return dispatch(pingMarqeta()).then(() => {
      console.log('after ping');
       return dispatch(getUser(id));
    });
  }
}
