import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedOutHeader extends Component{
    render(){
        return (
            <div className="header-container">
                <div className="row">
                    <ul>
                        <li><Link to={"/register"}>Register</Link></li>
                        <li><Link to={"/login"}>Login</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default LoggedOutHeader;