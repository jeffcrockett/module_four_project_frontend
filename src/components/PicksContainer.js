import React from 'react'
import Pick from './Pick'
class PicksContainer extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                {this.props.picks.map(pick => <Pick 
                pick={pick}
                fetchPickRestaurant={this.props.fetchPickRestaurant}/>)}
            </div>
        )
    }
}

export default PicksContainer