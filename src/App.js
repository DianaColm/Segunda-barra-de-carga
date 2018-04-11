import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={ valueProgress:70 };
    this.updateStateValue = this.updateStateValue.bind(this);
  }

  updateStateValue(event){
    this.setState({ valueProgress:event.target.value })
  }
  render() {
    return (
      <div>
      <h1>value progress es: {this.state.valueProgress}</h1>
      <progress value = {this.state.valueProgress} max="100"/>
      <input type= "range" onChange={this.updateStateValue}/>
      </div>
    );
  }
}

export default App;
