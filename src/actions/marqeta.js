import * as types from 'constants/actionTypes';
import makeAPIAction from 'utils/makeAPIAction';

export function pingMarqeta() {
  return makeAPIAction(types.PING_MARQETA, {
    endpoint: 'https://shared-sandbox-api.marqeta.com/v3/ping',
  })
}

export function getUser(id) {
  return makeAPIAction(types.MARQETA_GET_USER, {
    endpoint: `https://shared-sandbox-api.marqeta.com/v3/users/${id}`,
  })
}

export function pingThenGetUser(id) {
  return (dispatch) => {
    console.log('start ping then get');
    dispatch(pingMarqeta()).then(() => {
      console.log('after ping');
      dispatch(getUser(id));
    })
  }
}
