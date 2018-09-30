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
    this.state.zipcode.length < 5 && this.setState({ zipcode: e.target.value });
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
          <Input
            onChange={e => this.checkAndSetZipoCode(e)}
            placeholder="zip code"
            name="zipcode"
            type="number"
            value={this.state.zipcode}
          />
          <br />
          Enter someting about the kind of food are you looking for:
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
