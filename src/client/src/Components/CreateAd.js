import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/Register.css';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            title: "",
            description: "",
            categories: "",
            disabledButton: false,
            redirect: false
        }
    }

    inputHandler = (type, event) => {
        let stateProp = "";
        switch(type){
            case "title":
                stateProp = "title";
                break;
            case "description":
                stateProp = "description";
                break;
            case "categories":
                stateProp = "categories";
                break;
            default: return;
        }
        this.setState({
            [stateProp]: event.target.value
        })
    };

    render(){
        if (this.state.redirect){
            return <Redirect to={"/ads"}/>
        }
        return (
            <div className="ad-container">
                <div className="header-cont">
                    <h1>Sell your cool stuff</h1>
                </div>
                <div className="log-in-cont">
                    <div className="register-cont">
                        <div className="description-label-cont">
                            <label htmlFor="ad-title">Title:</label>
                        </div>
                        <div className="ad-input-cont">
                            <input type="text" name="title" id={"title"} minLength={"4"} onChange={this.inputHandler.bind(this, "title")} value={this.state.title} required/>
                        </div>
                    </div>
                    <div className="register-cont">
                        <div className="description-label-cont">
                            <label htmlFor="ad-description">Description:</label>
                        </div>
                        <div className="ad-input-cont">
                            <textarea name="description" id="ad-description" value={this.state.description} onChange={this.inputHandler.bind(this, "description")}/>
                        </div>
                    </div>
                    <div className="register-pass-cont register-cont">
                        <div className="register-pass-label-cont">
                            <label htmlFor="register-password">Categories: </label>
                        </div>
                        <div className="register-pass-input-cont">
                            <input type="password" name="register-password" id={"register-password"} minLength={"6"} onChange={this.inputHandler.bind(this, "description")} value={this.state.password} required/>
                        </div>
                    </div>
                    <div className="register-submit-cont">
                        <button className={"btn"} id={"register-button"} disabled={this.state.disabledButton}>Create the ad</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
