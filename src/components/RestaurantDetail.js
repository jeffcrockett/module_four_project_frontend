import React from "react";

import { Card, Icon, Image } from 'semantic-ui-react'

const RestaurantDetail = ({ restaurant }) => {
    return <Card>
        <h1>{restaurant.restaurant.name}</h1>
    </Card>
}


export default RestaurantDetail