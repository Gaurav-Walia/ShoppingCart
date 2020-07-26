import React, { Component } from 'react';
import Catalog from './client/Catalog';
import './App.css';
import Register from './client/register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>NEW USER REGISTRATION</p>
            <Register />
        </header>
      </div>
    );
  }
}

export default App;
