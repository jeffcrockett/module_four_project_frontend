import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Pick from "./components/Pick";
import Search from "./components/Search";
import RestaurantsContainer from "./components/RestaurantsContainer";
import { Grid } from "semantic-ui-react";
import RestaurantDetail from "./components/RestaurantDetail";

import API_KEY from "./config.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      selected: null
    };
  }

  // componentDidMount = () => {
  //   this.searchFetch();
  // };

  selectRestaurant = restaurant => {
    this.setState({
      selected: restaurant
    });
    console.log(this.state.selected);
  };

  getRestaurants = query => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?q=${query}&lat=38.9&lon=-77&apikey=${
        API_KEY.API_KEY
      }&sort=real_distance`
    )
      .then(r => r.json())
      .then(data =>
        this.setState({
          restaurants: data.restaurants
        })
      );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              {this.state.selected ? (
                <RestaurantDetail restaurant={this.state.selected} />
              ) : (
                ""
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row relaxed columns={2}>
            <Grid.Column centered>
              <Search getRestaurants={this.getRestaurants} />
              <div
                style={{
                  overflow: "scroll",
                  "max-height": "500px",
                  display: "flex"
                }}
              >
                <RestaurantsContainer
                  restaurants={this.state.restaurants}
                  selectRestaurant={this.selectRestaurant}
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <Pick />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* <Calendar /> */}
      </div>
    );
  }
}

export default App;
