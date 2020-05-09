import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import UserItems from './components/users/UserItems'
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div className = "App" >
        <Navbar /> 
        <UserItems />
      </div>
    );
  }
}

export default App;