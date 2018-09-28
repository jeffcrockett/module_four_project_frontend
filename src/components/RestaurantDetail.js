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

  handleAddPick() {
    const data = {
      user_id: null,
      restaurant_id: this.props.restaurant.restaurant.R.res_id,
      date: this.state.mealDate._d,
      votes: 1,
      confirmed: false
    };
    fetch("https://localhost:3000/picks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringfify(data)
    })
      .then(res => res.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <Grid columns={2}>
        <Grid.Column>
          <Card>
            <h1>{this.props.restaurant.restaurant.name}</h1>
            <div>
              Address: {this.props.restaurant.restaurant.location.address}
            </div>
            <div>Cuisine(s): {this.props.restaurant.cuisines}</div>
            <div>
              User Rating:{" "}
              {this.props.restaurant.restaurant.user_rating.rating_text}
            </div>
            <div>
              Cost for Two: ${
                this.props.restaurant.restaurant.average_cost_for_two
              }
            </div>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>A map maybe?</Grid.Row>
          <Grid.Row>
            <Button onClick={this.handleAddPick}>Add to your picks</Button>
            <DatePicker
              selected={this.state.mealDate}
              onChange={this.handleChange}
            />
            <Button>Btn 2</Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default RestaurantDetail;
