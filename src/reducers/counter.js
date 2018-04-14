import * as types from '../constants/actionTypes.js'

const initialState = {
  counter: 2,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case types.DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state;
  }
}
