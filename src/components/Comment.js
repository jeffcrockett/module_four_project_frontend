import React, { Fragment } from "react";
import { Button, Icon, Card } from "semantic-ui-react";
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      content: this.props.comment.content,
      id: this.props.comment.id
    };
  }

  render() {
      debugger
    return (
      <Card
        centered
        style={{ "background-color": "#0000001f", color: "black" }}
      >
        <h2>
          <em>"{this.props.comment.content}"</em>
        </h2>{" "}
        <br />
        {this.state.editing ? (
          <form
            onSubmit={e => {
              this.setState({ editing: false });
              e.preventDefault();
              e.target.reset();
              this.props.editComment(this.state);
            }}
          >
            <input
              onChange={e =>
                this.setState({
                  content: e.target.value
                })
              }
              type="text"
              value={this.state.content}
            />
            <input type="submit" />
          </form>
        ) : (
          <strong>-{this.props.comment.user.username} </strong>
        )}
        {this.props.comment.user && this.props.userInfo &&
          this.props.comment.user.id === this.props.userInfo.id && (
            <Fragment>
              <Button
                style={{ margin: "5px auto" }}
                basic
                color="teal"
                onClick={() => this.setState({ editing: !this.state.editing })}
              >
                Edit
              </Button>
              <Button
                color="red"
                basic
                onClick={() => this.props.deleteComment(this.props.comment.id)}
              >
                Delete
              </Button>
            </Fragment>
          )}
      </Card>
    );
  }
}

export default Comment;
