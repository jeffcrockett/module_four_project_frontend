import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Card, Icon, Image, Grid, Button } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class RestaurantDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      mealDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      mealDate: date
    });
  }

  handleAddPick = () => {
    if (this.props.userInfo) {
      const data = {
        user_id: this.props.userInfo.id,
        restaurant_id: this.props.restaurant.R.res_id,
        restaurant_name: this.props.restaurant.name,
        date: this.state.mealDate._d,
        votes: 1,
        confirmed: false
      };
      const token = localStorage.getItem("token");
      fetch("http://localhost:3000/api/v1/picks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.props.fetchPicks();
        });
    } else {
      <Redirect to="/login" />;
      // this.props.history.push("/login");
    }
  };

  render() {
    // debugger;

    return (
      <Grid columns={2}>
        <Grid.Column
          style={{
            "margin-top": "3em",
            color: "rgba(210, 23, 23, 0.87)"
          }}
        >
          <Card centered>
            <h1>{this.props.restaurant.name}</h1>
            <div>Address: {this.props.restaurant.location.address}</div>
            <div>Cuisine(s): {this.props.restaurant.cuisines}</div>
            <div>
              User Rating: {this.props.restaurant.user_rating.rating_text}
            </div>
            <div>
              Cost for Two: ${this.props.restaurant.average_cost_for_two}
            </div>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            {/* for more information on manupulating this map, check out https://staticmapmaker.com/google/ */}
            <Image
              style={{ "margin-bottom": "15px" }}
              centered
              circular
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${
                this.props.restaurant.location.latitude
              },+${
                this.props.restaurant.location.longitude
              }&zoom=16&scale=1&size=400x250&maptype=roadmap&key=AIzaSyCzEZmyQvVoarnp7tMuWYmpDd95t5MLXm4&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x800080%7Clabel:${
                this.props.restaurant.name
              }%7C${this.props.restaurant.location.latitude},+${
                this.props.restaurant.location.longitude
              }`}
            />
          </Grid.Row>
          <Grid.Row>
            {!this.props.isPick ? (
              <Fragment>
                <DatePicker
                  selected={this.state.mealDate}
                  onChange={this.handleChange}
                />
                <Button onClick={this.handleAddPick.bind(this)}>
                  Add to your picks
                </Button>
                <Button>Add to my favorites</Button>
              </Fragment>
            ) : (
              <Button onClick={this.props.voteOnPick}>Vote</Button>
            )}
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RestaurantDetail;
