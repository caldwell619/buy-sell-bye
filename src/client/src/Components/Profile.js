import React, {Component} from "react";
import { Link } from 'react-router-dom';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import '../css/Profile.css';

class Profile extends Component{
    componentDidMount(){
        console.log("profile mount");
        this.props.fetchUser()
    }
    render(){
        let name = "";
        if (this.props.user != null){
            name = this.props.user.firstName
        }
        return (
            <React.Fragment>
                <div className="header-cont">
                    <h1>Welcome back, {name}</h1>
                </div>
                <div className="profile-body">
                    <div className="action-prompt">
                        What would you like to do?
                    </div>
                    <div className="action-cont">
                        <Link to={`/ads/${name}`}><button className={"btn"} id={"show-ads-btn"}>Show My Ads</button></Link>
                        <Link to={"/ads/create"}><button className={"btn"} id={"new-ad-btn"}>Create a new ad</button></Link>
                        <Link to={"/profile/edit"}><button className={"btn"} id={"edit-prof-btn"}>Edit My Profile</button></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, actions)(Profile);