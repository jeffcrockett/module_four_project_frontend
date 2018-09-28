import React from 'react'

class PicksContainer extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                {this.props.picks.map(pick => <Pick pick={pick}/>)}
            </div>
        )
    }
}