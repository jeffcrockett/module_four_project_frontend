import React from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";

import MealPix from "../MealPix.png";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: "main"
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu tabular>
        <Link to="/welcome">
          <Menu.Item>
            <Image src={MealPix} size="tiny" />
            <h1>MealPix</h1>
          </Menu.Item>
        </Link>

        <Link to="/main">
          <Menu.Item
            name="main"
            active={activeItem === "main"}
            onClick={this.handleItemClick}
          />
        </Link>

        <Link to="/login">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </Link>
      </Menu>
    );
  }
}
