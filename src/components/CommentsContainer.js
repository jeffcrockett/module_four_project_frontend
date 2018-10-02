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
                {this.props.comments.map(comment => <Comment userInfo={this.props.userInfo}
                comment={comment} editComment={this.props.editComment}
                deleteComment={this.props.deleteComment}/>)}
            </div>
        )
    }

}

export default CommentsContainer