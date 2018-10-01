import React from "react";

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
    const data = {
      user_id: 1,
      restaurant_id: this.props.restaurant.R.res_id,
      restaurant_name: this.props.restaurant.name,
      date: this.state.mealDate._d,
      votes: 1,
      confirmed: false
    };
    const token = localStorage.getItem('token')
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
        this.props.fetchPicks()
      });
  }

  render() {
    return (
      <Grid columns={2}>
        <Grid.Column>
          <Card>
            <h1>{this.props.restaurant.name}</h1>
            <div>
              Address: {this.props.restaurant.location.address}
            </div>
            <div>Cuisine(s): {this.props.restaurant.cuisines}</div>
            <div>
              User Rating:{" "}
              {this.props.restaurant.user_rating.rating_text}
            </div>
            <div>
              Cost for Two: ${
                this.props.restaurant.average_cost_for_two
              }
            </div>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>A map maybe?</Grid.Row>
          <Grid.Row>
            <DatePicker
              selected={this.state.mealDate}
              onChange={this.handleChange}
            />
            {!this.props.isPick ?
            <div>
            <Button onClick={this.handleAddPick.bind(this)}>Add to your picks</Button>
            <Button>Add to my favorites</Button>
            </div> :
            <Button onClick={() => this.props.voteOnPick()}>Vote on this pick</Button>
            }
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RestaurantDetail;
