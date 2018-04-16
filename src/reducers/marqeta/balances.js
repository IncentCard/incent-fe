import * as types from 'constants/actionTypes.js'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${types.MARQETA_GET_BALANCES}_REQUEST`:
      return { loaded: false };
    case `${types.MARQETA_GET_BALANCES}_FAILURE`:
      return {
        loaded: true,
        error: {...action.payload},
      };
    case `${types.MARQETA_GET_BALANCES}_RECEIVED`:
      return {
        ...action.payload,
        loaded: true,
      };
    default:
      return state;
  }
}
