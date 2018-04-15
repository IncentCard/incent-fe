import * as types from 'constants/actionTypes.js'

const initialState = {}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${types.MARQETA_LOGIN}_REQUEST`:
      return { loading: true };
    case `${types.MARQETA_LOGIN}_FAILURE`:
      return {
        loading: false,
        error: {...action.payload},
      };
    case `${types.MARQETA_LOGIN}_RECEIVED`:
      return {
        ...action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
