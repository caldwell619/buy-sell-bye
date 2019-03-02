import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Landing from './Components/Landing';
import Profile from './Components/Profile';
import Register from "./Components/Register";
import AllAdds from "./Components/AllAds";
import CreateAd from './Components/CreateAd';
import Header from "./Components/Header/Header";
import TopNavBar from './Components/Header/TopNavBar';
import Login from "./Components/Login";
import IndividualAd from "./Components/IndividualAd";
import UserAds from "./Components/UserAds";

import './css/App.css';

class App extends Component {
    componentDidMount(){
        // reaches out and sets user-logged in to store
        this.props.fetchUser()
    }
  render() {
        let blurContent = "";
        if (this.props.menuShown){
            blurContent = "blur-content"
        }
    return (

                <BrowserRouter>
                    <React.Fragment>
                    <div className={"main-cont"} id={"top"}>
                        <Header/>
                        <TopNavBar/>
                        <main className={`main ${blurContent}`} onClick={this.props.closeMenu}>
                            <Switch>
                                <Route path={"/profile"} render={() => <Profile/>}/>
                                <Route path={"/login"} render={() => <Login/>}/>
                                <Route path={"/register"} render={() => <Register/>}/>
                                <Route path={"/ads"} exact render={() => <AllAdds/>}/>
                                <Route path={"/ads/:user"} exact render={() => <UserAds/>}/>
                                <Route path={"/ads/show/:id"} render={(routeProps) => <IndividualAd {...routeProps}/>}/>
                                <Route path={"/ads/create"} exact render={() => <CreateAd/>}/>
                                <Route path={"/"} exact render={() => <Landing/>}/>
                            </Switch>
                        </main>
                        </div>
                    </React.Fragment>
                </BrowserRouter>
    )
  }
}

// <Route path={"/ads/view"} render={() => <ListingsView/>}/>

const mapStateToProps = state => {
    return {
        user: state.user,
        menuShown: state.menuShown
    }
};
export default connect(mapStateToProps, actions)(App);


