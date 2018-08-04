const initialState = {
  counter: {
    total: 0,
    title: 'Our Redux App'
  },
  users: {
    progress: 0,
    loadingList: false,
    userList: []
  },
  errors: {
    hasError: false,
    message: ''
  }
}

export default initialState