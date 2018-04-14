import * as types from '../constants/actionTypes';

export function incrementCounter() {
  return {
    type: types.INC_COUNTER,
  }
}

export function decrementCounter() {
  return {
    type: types.DEC_COUNTER,
  }
}
