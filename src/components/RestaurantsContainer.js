import React from "react";
import Restaurant from "./Restaurant";
// import { Card } from "semantic-ui-react";

const RestaurantsContainer = ({ restaurants, selectRestaurant }) => {
  return (
    <div>
      <div style={{ "margin-top": "15px" }}>
        {restaurants.map(restaurant => (
          // <Card centered>
          <Restaurant
            selectRestaurant={selectRestaurant}
            restaurant={restaurant}
          />
          // </Card>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsContainer;
