import React, { Component } from 'react'
import { signUpUser } from '../api-utils';

export default class SignUpPage extends Component {
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
        const user = await signUpUser(this.state.email, this.state.password);

        this.props.handleUserChange(user);

        this.props.history.push('/favorites');
    } catch(e) {
        this.setState({ error: e.response.body.error })
    }
    }
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                {
                    this.state.error && <h5 style={{ color: 'blueviolet' }}>{this.state.error}</h5>
                }
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                    <input value={this.state.email}
                            onChange={this.handleEmailChange} />
                    </label>
                    <label>Password
                     <input value={this.state.password}
                            onChange={this.handlePasswordChange} />
                    </label>
                    <button>Sign Up!</button>
                </form>
            </div>
        )
    }
}
