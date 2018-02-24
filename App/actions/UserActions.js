import * as types from './ActionTypes'
import fetch from 'node-fetch'

export function userFetch() {
  return dispatch => {
  dispatch(userFetchStart());
    fetch('https://api.github.com/users')
    .then(res => res.json()).then(result => {
      dispatch(progressChange(100));
      dispatch(userFetchSuccess(result));
    }).catch(error => {
      dispatch(callError(error));
    })
  }
}

export function userFetchStart() {
  return { type: types.USER_FETCH_START }
}

export function userFetchSuccess(data) {
  return { type: types.USER_FETCH_SUCCESS, data }
}

export function progressChange(data) {
  return { type: types.USER_PROGRESS, data }
}

export function callError(error) {
  return { type: types.CALL_ERROR, error }
}