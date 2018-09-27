import React from "react";
import { Input, Button, Icon } from 'semantic-ui-react'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    setFormValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }
  render() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            this.props.getRestaurants(this.state.value)
        }}>
            <Input onChange={this.setFormValue} placeholder="Search..."/>
            <Button type="submit" icon>
                <Icon name="search"/>
            </Button>
        </form>
    )
  }
}

export default Search;
