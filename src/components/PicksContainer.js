import React from 'react'
import Pick from './Pick'
class PicksContainer extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        const sortedPicks = this.props.picks.sort((a, b) => new Date(a.date) - new Date(b.date))
        console.log('sorted picks are ', sortedPicks)
        return (
            <div>
                {sortedPicks.map(pick => <Pick 
                pick={pick}
                fetchPickRestaurant={this.props.fetchPickRestaurant}
                userInfo={this.props.userInfo}
                removePick={this.props.removePick}/>)}
            </div>
        )
    }
}

export default PicksContainer