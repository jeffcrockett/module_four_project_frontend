import React from 'react'

const Pick = ({pick, fetchPickRestaurant}) => {
    return (
        <div onClick={() => fetchPickRestaurant(pick.restaurant_id)}>
            {pick && pick.date}
        </div>
    )
}

export default Pick