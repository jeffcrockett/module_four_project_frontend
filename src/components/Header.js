import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Image, Button } from "semantic-ui-react";

// import MealPix from "../MealPix.png";
import MealPix2 from "../mealpix2.png";

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
          <Menu.Item style={{ display: "inherit" }}>
            <Image src={MealPix2} size="medium" />
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
          <div className="ui clearing segment">
            {this.props.userInfo ? (
              // <Menu.Item>{this.props.userInfo.username}</Menu.Item>
              <Link to="/">
                <h2
                  onClick={this.props.logout}
                  className="ui right floated header"
                >
                  Logout
                </h2>
                {this.props.userInfo.username && (
                  <h4 style={{ color: "red", "pointer-events": "none" }}>
                    {this.props.userInfo.username}
                  </h4>
                )}
              </Link>
            ) : (
              <Fragment>
                <Menu.Item>
                  <Link to="/register">
                    <a className="ui right floated header">Register</a>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  style={{
                    display: "inline-block"
                  }}
                >
                  <Button
                    primary
                    style={{
                      "background-color": "#61dcba"
                    }}
                  >
                    <Link to="/login">
                      <a className="ui right floated header">Login</a>
                    </Link>
                  </Button>
                </Menu.Item>
              </Fragment>
            )}
          </div>
        </Menu.Menu>
      </Menu>
    );
  }
}
