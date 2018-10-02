import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
const Comment = props => {
    return (
        <div>{props.comment.user.username} <br/>
            {props.comment.content} 
            <Button>Edit</Button>
            <Button>Delete</Button>
        </div>
    )
}

export default Comment