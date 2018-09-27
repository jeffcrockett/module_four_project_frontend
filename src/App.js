import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar'
import Header from './components/Header'
import Pick from './components/Pick'
import Search from './components/Search'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Calendar/>
        <Search/>
        <Pick/>
      </div>
    );
  }
}

export default App;
