import React, { Component } from 'react'
import { logInUser } from '../api-utils.js'

export default class LogInPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmailChange = (e) => this.setState({
        email: e.target.value
    })

    handlePasswordChange = (e) => this.setState({
        password: e.target.value
    })

    handleSubmit = async e => {
        e.preventDefault();
    try {
        const user = await logInUser(this.state.email, this.state.password);

        this.props.handleUserChange(user);

        this.props.history.push('/favorites');
    } catch(e) {
        this.setState({ error: e.response.body.error })
    }
    }

    render() {
        return (
            <div>
                <h3>Log In</h3>
                {
                    this.state.error && <h5 style={{ color: 'blueviolet' }}>{this.state.error}</h5>
                }
                <form onSubmit={this.handleSubmit}>
                    <lable>Email
                     <input value={this.state.email}
                            onChange={this.handleEmailChange} />
                    </lable>
                    <label>Password
                     <input value={this.state.password}
                            onChange={this.handlePasswordChange} />
                    </label>
                    <button>Log In!</button>
                </form>
            </div>
        )
    }
}
