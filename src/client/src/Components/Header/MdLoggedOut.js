import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MdLoggedOut extends Component{
    render(){
        return (
            <div className="header-container desktop">
                <div className="nav-row">
                    <div className="logo-cont">
                        <img src="#" alt="company logo"/>
                    </div>
                    <div className="md-nav-cont">
                        <ul>
                            <li><Link to={"/register"}>Register</Link></li>
                            <li><Link to={"/login"}>Login</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
export default MdLoggedOut;