import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';


class SmLoggedOut extends Component{
    constructor(){
        super();
        this.state = {
            redirect: false
        }
    }
    logout = () => {
        this.props.closeMenu();
        axios.get("/api/logout").then(() => this.setState({redirect: true}))
            .catch(error => console.log(error))
    };
    render(){
        if (this.state.redirect){
            return <Redirect to="/"/>
        }
        let showMenu = "";
        if (this.props.menuShown){
            showMenu = "show-menu"
        }
        return (
            <div className={`sm-nav-cont mobile ${showMenu} auth-cont`}>
                <div className="menu-header-cont">
                    <h2>Buy, Sell, Bye</h2>
                </div>
                <div className="nav-link-cont">
                    <ul>
                        <li><Link to={"/ads"} onClick={this.props.closeMenu}>Ads</Link></li>
                        <li><Link to={"/ads/create"} onClick={this.props.closeMenu}>Create Ad</Link></li>
                        <li><Link to={"/profile"} onClick={this.props.closeMenu}>Profile</Link></li>
                        <li onClick={this.logout}>Logout</li>
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        menuShown: state.menuShown
    }
};
export default connect(mapStateToProps, actions)(SmLoggedOut);