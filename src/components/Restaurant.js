import React from "react";

import { Card, Icon, Image } from "semantic-ui-react";
import noun_Food from "../noun_Food.png";

const Restaurant = ({ restaurant, selectRestaurant }) => (
  <Card onClick={() => selectRestaurant(restaurant)}>
    {!restaurant.restaurant.thumb ? (
      <Image src={noun_Food} size="small" centered />
    ) : (
      <Image src={restaurant.restaurant.thumb} />
    )}
    <Card.Content>
      <Card.Header>{restaurant.restaurant.name}</Card.Header>
      <Card.Meta>
        <span className="date">{restaurant.restaurant.cuisines}</span>
      </Card.Meta>
      <Card.Description>
        {restaurant.restaurant.location.locality}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default Restaurant;
