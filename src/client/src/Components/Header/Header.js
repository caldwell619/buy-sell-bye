import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggedInHeader from './LoggedInHeader';
import LoggedOutHeader from './LoggedOutHeader';
import * as actions from '../../store/actions';
import '../../css/Header.css';

class Header extends Component{

    determineLogin = () => {
        switch(this.props.user){
            case null:
                return;
            case false:
                return <LoggedOutHeader/>;
            default:
                return <LoggedInHeader/>;
        }
    };
    render(){
        return (
            <React.Fragment>
                {this.determineLogin()}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps, actions)(Header);