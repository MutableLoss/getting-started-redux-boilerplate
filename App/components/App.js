import React, { Component } from 'react'
import fetch from 'node-fetch'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Test App',
      counter: 0,
      progress: 0,
      loadingList: false,
      userList: [
        'none'
      ]
    }
  }

  counterUp = () => {

  }

  counterDown = () => {

  }

  getUsers = () => {
    this.setState({userList: result})
  }

  render() {
    return (
      <div className="container">
        <div className="body">
          <h1>{this.state.title}</h1>
        </div>
        <div className="body counter">
          <div className="counter-number">
            <h1>{this.state.counter}</h1>
          </div>
          <button 
            className="button btn-light"
          >
            +
          </button>
          <button 
            className="button btn-light"
          >
            -
          </button>
        </div>
        {this.state.progress ?
        <div className="progress" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuetext={`${this.state.progress} percent`} aria-valuemax="100">
          <div className="progress-meter"></div>
        </div> :
        ''}
        <div className="user-list">
          <ul>
            {this.state.userList.map(user => {
              <li key={user}>{user}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}