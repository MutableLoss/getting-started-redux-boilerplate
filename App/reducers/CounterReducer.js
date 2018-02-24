// import initialState from './initialState';

const initialState = {
  counter: {
    total: 0,
    title: 'Our Redux App'
  }
}

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