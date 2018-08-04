import initialState from './initialState'

export default function (state = initialState.counter, action) {
  switch(action.type) {
    case 'COUNTER_UP':
      return {
        ...state, total: state.total + 1
      }
    case 'COUNTER_DOWN':
      return {
        ...state, total: state.total - 1
      }
    default:
      return state;
  }
}