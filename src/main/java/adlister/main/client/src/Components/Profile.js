import React, {Component} from "react";
import '../css/Profile.css';
import { Route, Link } from 'react-router-dom';
import ListingsView from  './ListingsView';
import ProfileView from "./ProfileView";
class Profile extends Component{
    render(){
        return (
            <React.Fragment>
            <div id={'header'}>
                Welcome back 'username'<hr/>
                <button><p className={'link'}>Home</p></button><button><p className={'link'}>Ads</p></button><button><p className={'link'}>Contact</p></button>
            </div>

                <div id={'view-buttons'}>
                <Link to={"/profile/listings"}><button className={'profile-button'}>Listings</button></Link>
                <Link to={"/profile/edit"}><button className={'profile-button'}>Edit Profile</button></Link>
                </div>

                <div id={'view-window'}>
                <Route path={'/profile/listings'} render={() => <ListingsView/>}/>
                <Route path={'/profile/edit'} render={() => <ProfileView/>}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Profile;