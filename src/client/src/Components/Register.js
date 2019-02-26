import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            email: "",
            disabledButton: false
        }
    }

    usernameHandler = event => {
        this.setState({
            username: event.target.value
        })
    };
    emailHandler = event => {
        this.setState({
            email: event.target.value
        })
    };
    passwordHandler = event => {
        this.setState({
            password: event.target.value
        })
    };

    createUser = () => {
        this.setState({disabledButton: true});
        axios.post("http://localhost:8080/api/register", `email=${this.state.email}&username=${this.state.username}&password=${this.state.password}`)
        .then(res => {
            this.setState({disabledButton: false});
            console.log(res);
            return <Redirect to={"/login"}/>
        })
            // error handling to include username taken
            .catch(err => {
                this.setState({disabledButton: false});
                console.log(err)
            })
    };
    render(){
        return (
            <div className="container">
                <div className="log-in-cont">
                    <div className="email-cont">
                        <div className="email-label-cont">
                            <label htmlFor="register-email">E-mail:</label>
                        </div>
                        <div className="email-input-cont">
                            <input type="email" name="email" id={"register-email"} minLength={"4"} onChange={this.emailHandler} value={this.state.email} required/>
                        </div>
                    </div>
                    <div className="register-username-cont">
                        <div className="user-label-cont">
                            <label htmlFor="register-username">Username:</label>
                        </div>
                        <div className="register-user-input-cont">
                            <input type="text" name="username" id={"register-username"} minLength={"4"} onChange={this.usernameHandler} value={this.state.username} required/>
                        </div>
                    </div>
                    <div className="register-pass-cont">
                        <div className="register-pass-label-cont">
                            <label htmlFor="register-password">Password:</label>
                        </div>
                        <div className="register-pass-input-cont">
                            <input type="password" name="register-password" id={"register-password"} minLength={"6"} onChange={this.passwordHandler} value={this.state.password} required/>
                        </div>
                    </div>
                    <div className="register-submit-cont">
                        <button id={"register-button"} onClick={this.createUser} disabled={this.state.disabledButton}>Sign Up!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;