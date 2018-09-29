import React from "react";
import { Image } from "semantic-ui-react";
import MealPix from "../MealPix.png";

const FrontPage = () => {
  return (
    <div>
      <Image src={MealPix} size="large" centered />
      <h1>Welcome to the MealPix</h1>
    </div>
  );
};

export default FrontPage;
