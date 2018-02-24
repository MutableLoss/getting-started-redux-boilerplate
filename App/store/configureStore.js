import { createStore, applyMiddleware, compose } from 'redux'
import DevTools from '../containers/DevTools'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'

const configureStore = () => {

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      DevTools.instrument()
    )
  );

  return store
}

export default configureStore