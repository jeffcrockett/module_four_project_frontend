import React from "react";
import Restaurant from "./Restaurant";

const RestaurantsContainer = ({restaurants}) => {
  return (
    <div>
      <div>Rest Cont.</div>
      <div>
        {restaurants.map(restaurant => <Restaurant restaurant={restaurant}/>)}
      </div>
    </div>
  );
};

export default RestaurantsContainer;
