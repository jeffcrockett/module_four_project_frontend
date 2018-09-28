import React from 'react'

const Pick = ({pick, fetchPickRestaurant}) => {
    let date = new Date(pick.date)
    return (
        <div onClick={() => fetchPickRestaurant(pick.restaurant_id, pick.id, pick.votes)}>
            {pick &&
            <div>
                <p>{pick.restaurant_name}</p>
                <p>{date.toDateString()}</p>
            <hr/>
            </div>  
            }
        </div>
    )
}

export default Pick