import React from "react";

const Pick = ({ pick, fetchPickRestaurant, userInfo, removePick }) => {
  let date = new Date(pick.date);
  // debugger;
  return (
    <div
      onClick={() => {
        // if (!(pick.user_id === userInfo.id)) {
          fetchPickRestaurant(pick.restaurant_id, pick.id, pick.votes);
        // } 
        // else {
        //   console.log("pick user id is ", pick.user_id);
        //   console.log("user id is ", userInfo.id);
        // }
      }}
    >
      {pick && userInfo ? (
        <div>
          <p>
            {pick.restaurant_name} <br /> suggested by {pick.user.username} for{" "}
            <br />
            {date.toDateString()}
          </p>
          <p>
            Votes: {pick.votes}{" "}
            {pick.user_id === userInfo.id ? (
              <button onClick={() => removePick(pick.id)}>Remove</button>
            ) : (
              ""
            )}
          </p>
          <hr />
        </div>
      ) : null}
    </div>
  );
};

export default Pick;
