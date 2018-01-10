import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2 className="header-title">MDS Digital Challenge</h2>
        {this.props.children}
      </div>
    );
  }
}
