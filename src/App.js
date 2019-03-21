import React, { Component } from 'react';
import List from './Components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className = "items_list">
          <List/>
       </div>
      </div>
    );
  }
}

export default App;
