import style from './style/style.scss'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('app')
);
