import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import MealPix from "../MealPix.png";

const FrontPage = () => {
  return (
    <div>
      <Link to="/main">
        <Image src={MealPix} size="large" centered />
      </Link>
      <div>
        <h1>Welcome to the MealPix</h1>
      </div>
    </div>
  );
};

export default FrontPage;
