import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ErrorActions from '../actions/ErrorActions'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, info) {
    this.props.actions.callError(info);
  }

  render() {
    if(this.props.state.hasError) {
      return (
        <Fragment>
          <div>
            <h2>Something went wrong</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.props.state.message}
            </details>
          </div>
        </Fragment>
      );
    }
    // Normally, just render children
    return this.props.children
  }
}

function mapStateToProps(state) {
  return {
    state: state.errors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ErrorActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);