import React, { Component, Fragment } from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      errorInfo: ''
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorInfo: info });
  }

  render() {
    if(this.state.hasError) {
      return (
        <Fragment>
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        </Fragment>
      );
    }
    // Normally, just render children
    return this.props.children
  }
}