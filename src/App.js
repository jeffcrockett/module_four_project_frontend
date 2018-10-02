import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Grid } from "semantic-ui-react";

// import Calendar from "./components/Calendar";
import logo from "./logo.svg";
import "./App.css";
import API_KEY from "./config.js";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import Map from "./components/Map";
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
      pickId: null,
      userInfo: null,
      mapAddress: null,
      sortFilter: "date"
    };
  }

  updateUserInfo = userInfo => this.setState({ userInfo });

  componentDidMount = () => {
    const url = "http://localhost:3000/api/v1/profile";
    const token = localStorage.getItem("token");
    if (token) {
      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(response => {
          this.updateUserInfo(response.user);
        });
      this.fetchPicks();
    }
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

  logout = () => {
    localStorage.clear();
    this.setState({ userInfo: null });
    // this.props.history.push('/main')
  };

  selectRestaurant = restaurant => {
    this.setState({
      selected: restaurant,
      isPick: false,
      mapAddress: restaurant.location.address
    });

    console.log(this.state.selected);
  };

  getRestaurants = query => {
    if(!query.zipcode || !query.value) {
      alert('Please fill in both fields')
      return
    }
    fetch(`http://api.zippopotam.us/us/${query.zipcode}`)
      .then(r => r.json())
      .then(json => {
        debugger
        if(Object.keys(json).length === 0) {
          alert('Please enter a valid zip code')
          return
        }
        fetch(
          `https://developers.zomato.com/api/v2.1/search?q=${query.value}&lat=${
            json.places[0].latitude
          }&lon=${json.places[0].longitude}&apikey=${
            API_KEY.API_KEY
          }&sort=real_distance`
        )
          .then(r => r.json())
          .then(data =>
            this.setState({
              restaurants: data.restaurants.map(r => r.restaurant)
            })
          );
      });
  };

  voteOnPick = () => {
    fetch(`http://localhost:3000/api/v1/picks/${this.state.pickId}`)
    .then(res => res.json())
    .then(json => {
      debugger
        if(json.voter_ids && !json.voter_ids.split(',').includes(String(this.state.userInfo.id))){
        const updatedVotes = this.state.pickVotes + 1;
        const updatedVoterIds = `${json.voter_ids}${this.state.userInfo.id},`
        fetch(`http://localhost:3000/api/v1/picks/${this.state.pickId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({ votes: updatedVotes, voter_ids: updatedVoterIds })
        })
          .then(res => res.json())
          .then(json => {
            this.setState({
              pickVotes: json.votes
            });
            this.fetchPicks();
            console.log(json);
          });

      }
    })
  };

  removePick = id => {
    fetch(`http://localhost:3000/api/v1/picks/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(json => this.fetchPicks());
  };

  handleSortChange = e => {
    // debugger;
    this.setState({
      sortFilter: e.target.value
    });
    if (this.state.sortFilter === "votes") {
      this.setState({
        picks: this.state.picks.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        )
      });
    } else {
      this.setState({
        picks: this.state.picks.sort((a, b) => b.votes - a.votes)
      });
    }
  };

  render() {
    // debugger;
    return (
      <div className="App">
        <Header userInfo={this.state.userInfo} logout={this.logout} />
        {/* <Map/> */}
        <Switch>
          <Route path="/welcome" component={FrontPage} />
          <Route
            exact
            path="/login"
            render={() => <LoginForm updateUserInfo={this.updateUserInfo} />}
          />
          <Route
            exact
            path="/register"
            render={() => <RegisterForm updateUserInfo={this.updateUserInfo} />}
          />

          <Route path="/">
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  {this.state.selected ? (
                    <RestaurantDetail
                      restaurant={this.state.selected}
                      fetchPicks={this.fetchPicks}
                      isPick={this.state.isPick}
                      voteOnPick={this.voteOnPick}
                      userInfo={this.state.userInfo}
                    />
                  ) : (
                    ""
                  )}
                </Grid.Column>
              </Grid.Row>
              <Grid.Row relaxed columns={2}>
                <Grid.Column floated="right">
                  <Grid.Row padded>
                    <Search getRestaurants={this.getRestaurants} />
                  </Grid.Row>
                  <Grid.Row
                    style={{
                      overflow: "scroll",
                      "overflow-x": "hidden",
                      "max-height": "400px"
                    }}
                  >
                    <Grid.Column
                      padded
                      style={{
                        display: "inline-block"
                      }}
                    >
                      <RestaurantsContainer
                        restaurants={this.state.restaurants}
                        selectRestaurant={this.selectRestaurant}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid.Column>
                <Grid.Column
                  style={{
                    overflow: "scroll",
                    "max-height": "400px",
                    "overflow-x": "hidden"
                  }}
                >
                  <PicksContainer
                    handleSortChange={this.handleSortChange}
                    picks={this.state.picks}
                    fetchPickRestaurant={this.fetchPickRestaurant}
                    userInfo={this.state.userInfo}
                    removePick={this.removePick}
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
