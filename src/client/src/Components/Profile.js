import React, {Component} from "react";
import { Route, Link } from 'react-router-dom';
import ListingsView from  './ListingsView';
import ProfileView from "./ProfileView";
import * as actions from '../store/actions';
import { connect } from 'react-redux';

class Profile extends Component{
    componentDidMount(){
        console.log("profile mount");
        this.props.fetchUser()
    }
    render(){
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}


export default connect(null, actions)(Profile);