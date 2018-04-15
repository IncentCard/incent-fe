import { RSAA } from 'redux-api-middleware';
import { Base64 } from 'js-base64';
import get from 'lodash/get';

import { MARQETA_APP_TOKEN } from 'constants/marqetaAppTokens';

function makeTypes(type) {
  return [
    `${type}_REQUEST`,
    `${type}_RECEIVED`,
    `${type}_FAILURE`,
  ];
}

function makeAuthorizationHeader(state) {
  const authToken = get(state.marqeta.login, 'access_token.token', '');

  return 'Basic ' + Base64.encode(
    `${MARQETA_APP_TOKEN}:${authToken}`
  );
}

export default function makeAPIAction(type, options) {
  return {
    [RSAA]: {
      method: 'GET',
      types: makeTypes(type),
      headers: (state) => {
        return {
          'Authorization': makeAuthorizationHeader(state),
          'content-type': 'application/json',
        };
      },
      ...options,
    }
  }
}
