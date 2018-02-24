import style from './style/style.scss'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/ConfigureStore'
import { Provider } from 'react-redux'
import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import DevTools from './containers/DevTools'

const store = configureStore()

render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
      <DevTools />
    </ErrorBoundary>
    </Provider>,
  document.getElementById('app')
);
