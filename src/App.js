import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import logo from "./logo.svg";
import "./App.css";
import API_KEY from "./config.js";

// import Calendar from "./components/Calendar";
import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import Login from "./components/Login";
import Pick from "./components/Pick";
import Search from "./components/Search";
import RestaurantsContainer from "./components/RestaurantsContainer";
import RestaurantDetail from "./components/RestaurantDetail";
import PicksContainer from "./components/PicksContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      selected: null,
      picks: [],
      isPick: false,
      pickId: null
    };
  }

  componentDidMount = () => {
    this.fetchPicks();
  };

  fetchPickRestaurant = (id, pickId, pickVotes) => {
    fetch(
      `http://developers.zomato.com/api/v2.1/restaurant?apikey=${
        API_KEY.API_KEY
      }&res_id=${id}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          selected: json,
          isPick: true,
          pickId: pickId,
          pickVotes: pickVotes
        });
      });
  };

  fetchPicks = () => {
    fetch("http://localhost:3000/api/v1/picks")
      .then(res => res.json())
      .then(json =>
        this.setState({
          picks: json
        })
      );
  };

  selectRestaurant = restaurant => {
    this.setState({
      selected: restaurant,
      isPick: false
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
          restaurants: data.restaurants.map(r => r.restaurant)
        })
      );
  };

  voteOnPick = () => {
    const updatedVotes = this.state.pickVotes + 1;
    fetch(`http://localhost:3000/api/v1/picks/${this.state.pickId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ votes: updatedVotes })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          pickVotes: json.votes
        });
        console.log(json);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/welcome" component={FrontPage} />
          <Route path="/login" component={Login} />
          <Route path="/main">
            <Grid>
              <Grid.Row columns={1} style={{ height: "400px" }}>
                <Grid.Column>
                  {this.state.selected ? (
                    <RestaurantDetail
                      restaurant={this.state.selected}
                      fetchPicks={this.fetchPicks}
                      isPick={this.state.isPick}
                      voteOnPick={this.voteOnPick}
                    />
                  ) : (
                    ""
                  )}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row relaxed columns={2}>
                <Grid.Column centered padded>
                  <Grid.Row>
                    <Search getRestaurants={this.getRestaurants} />
                  </Grid.Row>
                  <Grid.Row
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
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column>
                  <PicksContainer
                    picks={this.state.picks}
                    fetchPickRestaurant={this.fetchPickRestaurant}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
