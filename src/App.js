import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Pick from "./components/Pick";
import Search from "./components/Search";
import RestaurantsContainer from "./components/RestaurantsContainer";

import API_KEY from "./config.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    };
  }

  componentDidMount = () => {
    this.searchFetch();
  };

  searchFetch = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?lat=38.9&lon=-77&apikey=${
        API_KEY.API_KEY
      }`
    )
      .then(r => r.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Calendar />
        <Search />
        <RestaurantsContainer />
        <Pick />
      </div>
    );
  }
}

export default App;
