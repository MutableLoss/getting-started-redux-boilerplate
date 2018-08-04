import * as types from '../actions/ActionTypes'
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch(action.type) {
    case types.USER_FETCH_START:
      return {
        ...state, loadingList: true
      }
    case types.USER_FETCH_SUCCESS:
      return {
        ...state, loadingList: false, userList: action.data
      }
    case types.USER_PROGRESS:
      return {
        ...state, progress: 100
      }
    case types.CALL_ERROR:
      return {
        ...state, loadingList: false, progress: 0, userList: []
      }
    default:
      return state;
  }
}