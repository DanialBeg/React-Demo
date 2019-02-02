import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      color: props.defaultColor,
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <input type="text" 
          value={this.state.color} 
          onChange={event=> this.setState({color: event.target.value})}
        />
        <div 
          className ="colorBox" 
          style={{
            width: '50vw',
            height: '50vh',
            background: this.state.color,
          }}
        />
      </div>
    );
  }
}

export default App;
