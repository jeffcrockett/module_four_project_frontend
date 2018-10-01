import React from "react";
import { withRouter } from "react-router";
import { Button, Form, Segment, Message } from "semantic-ui-react";

class LoginForm extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    };

    handleLoginSubmit = () => {
        console.log(this.state);
        // send the fetch!
        const url = "http://localhost:3000/api/v1/login";
        const params = {
            username: this.state.username,
            password: this.state.password
        };
        fetch(url, {
            method: "POST",
            body: JSON.stringify(params),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(r => r.json())
            .then(response => {
                localStorage.setItem("token", response.jwt);
                // console.log(response);
                this.props.updateUserInfo(response.user);
                this.props.history.push("/");
            });
    };

    render() {
        return (
            <Segment>
                <Form
                    onSubmit={this.handleLoginSubmit}
                    size="mini"
                    key="mini"
                    loading={this.props.authenticatingUser}
                    error={this.props.failedLogin}
                >
                    <Message
                        error
                        header={this.props.failedLogin ? this.props.error : null}
                    />
                    <Form.Group widths="equal">
                        <Form.Input
                            label="username"
                            placeholder="username"
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                        />
                        <Form.Input
                            type="password"
                            label="password"
                            placeholder="password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
            </Segment>
        );
    }
}

export default withRouter(LoginForm);