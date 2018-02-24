const initialState = {
  errors: {
    hasError: false,
    message: ''
  }
}

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