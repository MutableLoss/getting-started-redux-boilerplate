import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CounterActions from '../actions/CounterActions'
import * as UserActions from '../actions/UserActions'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="body">
          <h1>{this.props.state.counter.title}</h1>
        </div>
        <div className="body counter">
          <div className="counter-number">
            <h1>{this.props.state.counter.total}</h1>
          </div>
          <button 
            className="button btn-light"
            onClick={() => this.props.actions.counter.counterUp()}
          >
            +
          </button>
          <button 
            className="button btn-light"
            onClick={() => this.props.actions.counter.counterDown()}
          >
            -
          </button>
        </div>
        <div className="get-user-buttons">
          <button
            className="button"
          onClick={() => this.props.actions.users.userFetch()}>Get Users</button>
        </div>
        {this.props.state.users.progress ?
        <div className="progress" role="progressbar">
        <div className="progress-meter" style={{ width: this.state.progress + '%' }} aria-valuemin="0" aria-valuetext={`${this.state.progress} percent done receiving users`} aria-valuemax="100"></div>

        </div> : ''}
        <div className="user-container">
          <div className="user-list">
            {this.props.state.users.userList.length > 0 ?
              <ul className="users light-scroll">
                {this.props.state.users.userList.map((object, index) => (
                  <li key={index} className="user-object">
                    <p>{object.login}</p>
                    <img src={object.avatar_url} />
                  </li>
                ))}
              </ul> : ''
            }
          </div>
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
<<<<<<< 7b39249cb654940b0b7588fb533bdaa05ee44b5d
    state: state.counter
=======
    state: {
      counter: state.counter,
      users: state.users
    }
>>>>>>> scale the app and add async actions
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

