import React from "react";
import { Input, Button, Icon, Form } from "semantic-ui-react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      zipcode: ""
    };
  }

  checkAndSetZipoCode = e => {
    this.setState({ zipcode: e.target.value });
  };

  resetZip = () => {
    this.setState({
      zipcode: ""
    });
  };

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.getRestaurants(this.state);
        }}
      >
        <Form>
          Enter a zipcode to search near:
          <br />
          <Input
            onChange={e => this.checkAndSetZipoCode(e)}
            placeholder="zip code"
            name="zipcode"
            type="number"
            value={this.state.zipcode}
          />
          {/* <Button icon onClick={this.resetZip}>
            <Icon name="redo" />
          </Button> */}
          <br />
          What kind of food are you looking for:
          <br />
          <Input
            onChange={e => this.setState({ value: e.target.value })}
            placeholder="Search..."
            value={this.state.value}
          />
          <Button type="submit" icon>
            <Icon name="search" />
          </Button>
        </Form>
      </form>
    );
  }
}

export default Search;
