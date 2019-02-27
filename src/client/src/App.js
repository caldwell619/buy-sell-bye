import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from "./Components/Register";
import Header from "./Components/Header/Header";
import CreateAd from './Components/CreateAd';
import './css/App.css';
import LoggedOutMenu from "./Components/LoggedOutMenu";

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
            <i className="fas fa-bars menu-toggle" onClick={this.props.toggleMenu}/>
                <BrowserRouter>
                    <div className={"main-cont"}>
                        <LoggedOutMenu/>
                        <main className={`main ${blurContent}`} onClick={this.props.closeMenu}>
                        <Switch>
                            <Route path={"/profile"} render={() => <Profile/>}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                            <Route path={"/register"} render={() => <Register/>}/>
                            <Route path={"/ads/create"} render={() => <CreateAd/>}/>
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


