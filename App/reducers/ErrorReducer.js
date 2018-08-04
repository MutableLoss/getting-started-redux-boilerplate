import initialState from './initialState'

export default function (state = initialState.errors, action) {
  switch(action.type) {
    case 'CALL_ERROR':
      return {
        ...state, hasError: true, message: action.error
      }
    default:
      return state;
  }
}