import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            email: ""
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
        fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${this.state.email}&username=${this.state.username}&password=${this.state.password}`
        }).then(res => {
            if (res.status !== 200){
                return <Redirect to={"/login"}/>;
            } else {
                // do something to let them know its taken
            }
        })
            .catch(() => console.log("nope"))
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
                        <button id={"register-button"} onClick={this.createUser}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;