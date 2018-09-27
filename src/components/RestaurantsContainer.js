import React from "react";
import Restaurant from "./Restaurant";

const RestaurantsContainer = ({restaurants, selectRestaurant}) => {
  return (
    <div>
      <div>Rest Cont.</div>
      <div>
        {restaurants.map(restaurant => <Restaurant 
        selectRestaurant={selectRestaurant} restaurant={restaurant}/>)}
      </div>
    </div>
  );
};

export default RestaurantsContainer;
