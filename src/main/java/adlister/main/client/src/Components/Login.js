import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    usernameHandler = event => {
        this.setState({
            username: event.target.value
        })
    };
    passwordHandler = event => {
        this.setState({
            password: event.target.value
        })
    };

    getUser = () => {
        fetch("http://localhost:8080/api/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${this.state.username}&password=${this.state.password}`
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    };
    login = () => {
      this.props.fetchUser(this.state.username, this.state.password)
    };
    tellMe = () => {
        console.log(this.props)
    };
    render(){
        return (
            <div className="container">
                <div className="log-in-cont">
                    <div className="username-cont">
                        <div className="user-label-cont">
                            <label htmlFor="login-username">Username:</label>
                        </div>
                        <div className="user-input-cont">
                            <input type="text" name="username" id={"login-username"} onChange={this.usernameHandler} value={this.state.username} required/>
                        </div>
                    </div>
                    <div className="pass-cont">
                        <div className="pass-label-cont">
                            <label htmlFor="login-password">Password:</label>
                        </div>
                        <div className="pass-input-cont">
                            <input type="password" name="password" id={"login-password"} onChange={this.passwordHandler} value={this.state.password} required/>
                        </div>
                    </div>
                    <div className="submit-cont">
                        <button id={"login-button"} onClick={this.tellMe}>Login normal</button>
                        <button id={"login-but"} onClick={this.login}>Login axios</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
};
export default connect(mapStateToProps, actions)(Login);