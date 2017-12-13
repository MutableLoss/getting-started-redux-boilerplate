import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Test App'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}