import React, { Component } from 'react';
import Catalog from './client/Catalog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>PRODUCTS</p>
            <Catalog />
        </header>
      </div>
    );
  }
}

export default App;
