import React from "react";

const Pick = ({ pick, fetchPickRestaurant, userInfo }) => {
  let date = new Date(pick.date);
  // debugger;
  return (
    <div
      onClick={() =>
        fetchPickRestaurant(pick.restaurant_id, pick.id, pick.votes)
      }
    >
      {pick && (
        <div>
          <p>
            {pick.restaurant_name} <br/> suggested by {pick.user.username} for <br/>
            {date.toDateString()}
          </p>
          <p>Votes: {pick.votes}</p>
          <hr />
        </div>
      )}
    </div>
  );
};

export default Pick;
