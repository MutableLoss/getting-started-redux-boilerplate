import * as types from './ActionTypes'

export function counterUp() {
  return {type: types.COUNTER_UP}
}

export function counterDown() {
  return {type: types.COUNTER_DOWN}
}