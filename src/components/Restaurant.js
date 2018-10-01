import React from "react";

import { Card, Icon, Image, Rating } from "semantic-ui-react";
import noun_Food from "../noun_Food.png";

const Restaurant = ({ restaurant, selectRestaurant }) => (
  <Card onClick={() => selectRestaurant(restaurant)} centered>
    {!restaurant.thumb ? (
      <Image src={noun_Food} size="tiny" centered />
    ) : (
      <Image src={restaurant.thumb} />
    )}
    <Card.Content centered>
      <Card.Header>{restaurant.name}</Card.Header>
      <Card.Meta>
        <span className="date">{restaurant.cuisines}</span>
      </Card.Meta>
      <Card.Description>{restaurant.location.locality}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        Rating:
        <Rating
          icon="food"
          defaultRating={restaurant.user_rating.aggregate_rating}
          maxRating={5}
          disabled
        />
      </a>
    </Card.Content>
  </Card>
);

export default Restaurant;
