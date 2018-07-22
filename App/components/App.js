import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetch from 'node-fetch'

import * as CounterActions from '../actions/CounterActions'

class App extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
      loadingList: false,
      userList: []
    }
  }

  getUsers = () => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(result => {
      this.setState({userList: result})
    }).catch(error => {
      throw error
    })
  }

  render() {
    return (
      <div className="container">
        <div className="body">
          <h1>{this.props.state.title}</h1>
        </div>
        <div className="body counter">
          <div className="counter-number">
            <h1>{this.props.state.total}</h1>
          </div>
          <button 
            className="button btn-light"
            onClick={() => this.props.actions.counterUp()}
          >
            +
          </button>
          <button 
            className="button btn-light"
            onClick={() => this.props.actions.counterDown()}
          >
            -
          </button>
        </div>
        <div className="get-user-buttons">
          <button
            className="button"
          >Get Users</button>
        </div>
        {this.state.progress ?
        <div className="progress" role="progressbar">
        <div className="progress-meter" style={{ width: this.state.progress + '%' }} aria-valuemin="0" aria-valuetext={`${this.state.progress} percent done receiving users`} aria-valuemax="100"></div>

        </div> : ''}
        <div className="user-container">
          <div className="user-list">
            {this.state.userList.length > 0 ?
              <ul className="users light-scroll">
                {this.state.userList.map((object, index) => (
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
    state: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

