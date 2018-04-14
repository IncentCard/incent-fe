import { RSAA } from 'redux-api-middleware';

import * as types from '../constants/actionTypes';

export function pingMarqeta() {
  return {
    [RSAA]: {
      endpoint: 'https://shared-sandbox-api.marqeta.com/v3/ping',
      method: 'GET',
      types: ['REQUEST', 'SUCCESS', 'FAILURE']
    }
  }
}
