import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            redirect: false
        }
    }
    componentDidMount(){
        console.log("login mount");
        this.props.fetchUser()
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

    login = () => {
        // sets the backend session scope to log in the user
        axios.post("/api/login-user",
            `username=${this.state.username}&password=${this.state.password}`)
            .then(() => {
                this.setState({redirect: true})
            })
            .catch(() => {
                // eventual pop up saying nope
                alert("invalid entry")
            });
    };
    render(){
        if (this.state.redirect) {
            return <Redirect to="/profile"/>
        }
        return (
            <div className="container">
                <div className="log-in-cont">
                    <div className="username-cont">
                        <div className="user-label-cont">
                            <label htmlFor="login-username">Username:</label>
                        </div>
                        <div className="user-input-cont">
                            <input type="text" name="username" id={"login-username"} placeholder={"username"} onChange={this.usernameHandler} value={this.state.username} required/>
                        </div>
                    </div>
                    <div className="pass-cont">
                        <div className="pass-label-cont">
                            <label htmlFor="login-password">Password:</label>
                        </div>
                        <div className="pass-input-cont">
                            <input type="password" name="password" id={"login-password"} placeholder={"password"} onChange={this.passwordHandler} value={this.state.password} required/>
                        </div>
                    </div>
                    <div className="submit-cont">
                        <button id={"login-butt"} onClick={this.login}>Login</button>
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