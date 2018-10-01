import React from "react";

const Pick = ({ pick, fetchPickRestaurant }) => {
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
            {pick.restaurant_name}, suggested by User {pick.user_id} for lunch
            on
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
