import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";

import MealPix from "../MealPix.png";

export default class Header extends React.Component {
    constructor(props) {
    super(props);
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
          {/* <Menu.Item
            name="main"
            active={activeItem === "main"}
            onClick={this.handleItemClick}
          /> */}
        </Link>
        <Menu.Menu position="right">
        <div class='ui clearing segment'>
            {this.props.userInfo ? 
            <Link to="/"><h2 onClick={this.props.logout} class='ui right floated header'>Logout</h2></Link>
                : <Fragment>
                    <Link to="/register"><a class='ui right floated header'>Register</a></Link>
                    <Link to="/login"><a class='ui right floated header'>Login</a></Link>
                    </Fragment>}
           
        </div>
        </Menu.Menu>

        {/* <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu.Menu> */}
      </Menu>
    );
  }
}
