import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class LoggedInHeader extends Component{
    constructor(){
        super()
        this.state = {
            redirect: false
        }
    }
    logout = () => {
        axios.get("/api/logout").then(() => this.setState({redirect: true}))
            .catch(error => console.log(error))
    };
    render(){
        if (this.state.redirect){
            return <Redirect to="/"/>
        }
        return (
            <div className="header-container">
                <div className="row">
                    <ul>
                        <li><Link to={"/profile"}>Profile</Link></li>
                        <li><Link to={"/ads/show"}>All Ads</Link></li>
                        <li><Link to={"/ads/create"}>Create an Ad</Link></li>
                        <li onClick={this.logout}>Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default LoggedInHeader;