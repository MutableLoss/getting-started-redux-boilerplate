import { combineReducers } from 'redux'
import CounterReducer from './CounterReducer'
import UserReducer from './UserReducer'
import ErrorReducer from './ErrorReducer'

const rootReducer = combineReducers({
  counter: CounterReducer,
  users: UserReducer,
  errors: ErrorReducer
})

export default rootReducer