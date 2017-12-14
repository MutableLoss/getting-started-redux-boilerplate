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
      userList: []
    }
  }

  componentDidMount() {

  }

  counterUp = () => {
    this.setState({counter: this.state.counter + 1})
  }

  counterDown = () => {
    this.setState({counter: this.state.counter - 1})
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
          <h1>{this.state.title}</h1>
        </div>
        <div className="body counter">
          <div className="counter-number">
            <h1>{this.state.counter}</h1>
          </div>
          <button 
            className="button btn-light"
            onClick={() => this.counterUp()}
          >
            +
          </button>
          <button 
            className="button btn-light"
            onClick={() => this.counterDown()}
          >
            -
          </button>
        </div>
        <div className="get-user-buttons">
          <button
            className="button"
            onClick={() => this.getUsers()}
          >Get Users</button>
        </div>
        {this.state.progress ?
        <div className="progress" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuetext={`${this.state.progress} percent done receiving users`} aria-valuemax="100">
          <div className="progress-meter"></div>
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