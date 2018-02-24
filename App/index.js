import style from './style/style.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import { createStore, applyMiddleware, compose } from 'redux'
import DevTools from './containers/DevTools'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    DevTools.instrument()
  )
);

render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
      <DevTools />
    </ErrorBoundary>
    </Provider>,
  document.getElementById('app')
);
