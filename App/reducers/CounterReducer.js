import * as types from '../actions/ActionTypes'
import initialState from './initialState';

export default function counterReducer(state = initialState.counter, action) {
  switch(action.type) {
    case types.COUNTER_UP:
      return {
        ...state, total: state.total + 1
      }
    case types.COUNTER_DOWN:
      return {
        ...state, total: state.total - 1
      }
    default:
      return state;
  }
}