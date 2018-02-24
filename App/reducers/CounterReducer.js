import * as types from '../actions/ActionTypes'

let total = 0

export default function counterReducer(state = {total}, action) {
  switch(action.type) {
    case types.COUNTER_UP:
      return {
        total: state.total + 1
      }
    case types.COUNTER_DOWN:
      return {
        total: state.total - 1
      }
    default:
      return state;
  }
}