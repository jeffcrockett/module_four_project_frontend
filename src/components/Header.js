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
      <Menu>
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
        <div class='ui clearing segment'>
            {userInfo ? 
            <Link to="/"><h2 onClick={logout} class='ui right floated header'>Logout</h2></Link>
                : <Fragment>
                    <Link to="/register"><h2 class='ui right floated header'>Register</h2></Link>
                    <Link to="/login"><h2 class='ui right floated header'>Login</h2></Link>
                    </Fragment>}
            <h2 class='ui left floated header'>Mealpix</h2>
        </div>

        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}
