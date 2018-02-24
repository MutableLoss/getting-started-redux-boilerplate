import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CounterActions from '../actions/CounterActions'
import * as UserActions from '../actions/UserActions'

import Text from './visual/Text'
import Button from './visual/Button'
import ProgressBar from './visual/ProgressBar'
import UserList from './visual/UserList'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <Text
          text={this.props.state.counter.title}
          className="body"
        />
        <div className="body counter">
          <Text 
            text={this.props.state.counter.total}
            className="counter-number"
          />
          <Button
            text="+"
            className="button btn-light"
            onClick={() => this.props.actions.counter.counterUp()}
          />
          <Button 
            text="-"
            className="button btn-light"
            onClick={() => this.props.actions.counter.counterDown()}
          />
        </div>
        <div className="get-user-buttons">
          <Button
            text="Get Users"
            className="button"
            onClick={() => this.props.actions.users.userFetch()}
          />
        </div>
        {this.props.state.users.progress ?
          <ProgressBar
            progress={this.props.state.users.progress}
          /> 
        : ''}
        <div className="user-container">
          <UserList
            list={this.props.state.users.userList}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  counter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  })
}

function mapStateToProps(state) {
  return {
    state: {
      counter: state.counter,
      users: state.users
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      counter: bindActionCreators(CounterActions, dispatch),
      users: bindActionCreators(UserActions, dispatch)  
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

