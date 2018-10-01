import React from "react";
import Pick from "./Pick";
class PicksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "date"
    };
  }

  render() {
    // const sortedPicks = this.props.picks.sort(
    //   (a, b) => new Date(a.date) - new Date(b.date)
    // );
    // console.log("sorted picks are ", sortedPicks);
    return (
      <div>
        Sort by:
        <input
          name="filter"
          type="radio"
          value="votes"
          onChange={e => this.props.handleSortChange(e)}
        />{" "}
        Votes
        <input
          // checked="checked"
          // selected="true"
          name="filter"
          type="radio"
          value="date"
          onChange={e => this.props.handleSortChange(e)}
        />{" "}
        Date
        {this.props.picks.map(pick => (
          <Pick
            pick={pick}
            fetchPickRestaurant={this.props.fetchPickRestaurant}
            userInfo={this.props.userInfo}
            removePick={this.props.removePick}
          />
        ))}
      </div>
    );
  }
}

export default PicksContainer;
