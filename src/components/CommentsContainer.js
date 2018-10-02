import React from 'react'

import Comment from './Comment';

class CommentsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map(comment => <Comment comment={comment}/>)}
            </div>
        )
    }

}

export default CommentsContainer