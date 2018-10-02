import React, { Fragment } from 'react'
import { Button, Icon } from 'semantic-ui-react'
class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            content: this.props.comment.content,
            id: this.props.comment.id
        }
    }


    render() {
        return (
            <div><a>{this.props.comment.user.username}</a> <br/>
                { this.state.editing ?
                    <form onSubmit={(e) => {
                        this.setState({editing: false})
                        e.preventDefault();
                        e.target.reset();
                        this.props.editComment(this.state)
                    }}>
                    <input onChange={(e) => this.setState({
                        content: e.target.value
                        })} type="text" value={this.state.content}/>
                    <input type="submit"/>
                </form>
                : <a>{this.props.comment.content} </a>
                }
                {this.props.comment.user.id === this.props.userInfo.id &&
                <Fragment>
                    <Button onClick={() => this.setState({editing: !this.state.editing})}>Edit</Button>
                    <Button>Delete</Button>
                </Fragment>
                }
            </div>
    )
}
}

export default Comment