import React, {Component} from "react";
import {Button} from "antd";

class Login extends Component {
    handleJump() {
        this.props.history.push("/main");
    }

    render() {
        return (
            <div className={"login-container"}>
                login page!
                <Button onClick={this.handleJump.bind(this)} type={"primary"}>login</Button>
            </div>
        );
    }
}

export default Login;