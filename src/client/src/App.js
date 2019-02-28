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

import './css/App.css';
import IndividualAd from "./Components/IndividualAd";

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
        <React.Fragment>

                <BrowserRouter>
                    <div className={"main-cont"}>
                        <Header/>
                        <TopNavBar/>
                        <main className={`main ${blurContent}`} onClick={this.props.closeMenu}>
                            <Switch>
                                <Route path={"/profile"} render={() => <Profile/>}/>
                                <Route path={"/login"} render={() => <Login/>}/>
                                <Route path={"/register"} render={() => <Register/>}/>
                                <Route path={"/ads"} exact render={() => <AllAdds/>}/>
                                <Route path={"/ads/show/:id"} render={(routeProps) => <IndividualAd {...routeProps}/>}/>
                                <Route path={"/ads/create"} exact render={() => <CreateAd/>}/>
                                <Route path={"/"} exact render={() => <Landing/>}/>
                            </Switch>
                        </main>
                    </div>
                </BrowserRouter>
        </React.Fragment>
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


