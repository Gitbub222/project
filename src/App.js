import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const list = [
          "Jack",
          "Billy",
          "Johnny"
      ];
      return (
        <div className="App">

        <div className="App-header">
        <img src={logo} width="250px" alt="South park"/>
        </div>
        <div>
        {
          list.map( (item) =>{
              return (
                <h1 key={item.toString()}>
                {item}
                </h1>
              );
            })
        }
        </div>
        </div>

    );
  }
}

export default App;
