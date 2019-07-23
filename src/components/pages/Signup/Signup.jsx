import React, { Component } from "react";

class Signup extends Component {
    state = {
        username: "",
        password: "",
    };

    render () {
        return (
            <form>
                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.password}</p>
                <input
                type="text"
                placeholder="Username"
                />
                <input
                type="password"
                placeholder="Password"
                />
                <button>Sign Up!</button>
            </form>
        )
    }
}

export default Signup;