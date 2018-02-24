import style from './style/style.scss'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/ConfigureStore'
import { Provider } from 'react-redux'
import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'

const store = configureStore()

render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('app')
);
