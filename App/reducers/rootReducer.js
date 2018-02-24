import { combineReducers } from 'redux'
import CounterReducer from './CounterReducer'
import UserReducer from './UserReducer'

const rootReducer = combineReducers({
  counter: CounterReducer,
  users: UserReducer
})

export default rootReducer