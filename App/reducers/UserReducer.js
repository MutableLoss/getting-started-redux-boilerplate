const initialState = {
  users: {
    progress: 0,
    loadingList: false,
    userList: []
  }
}

export default function (state = initialState.users, action) {
  switch(action.type) {
    case 'USER_FETCH_START':
      return {
        ...state, loadingList: true
      }
    case 'USER_FETCH_SUCCESS':
      return {
        ...state, loadingList: false, userList: action.data
      }
    case 'USER_PROGRESS':
      return {
        ...state, progress: 100
      }
    case 'CALL_ERROR':
      return {
        ...state, loadingList: false, progress: 0, userList: []
      }
    default:
      return state;
  }
}