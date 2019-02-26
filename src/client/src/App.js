import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import axios from 'axios';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from "./Components/Register";
import Header from "./Components/Header/Header";

class App extends Component {
    componentDidMount(){
        // reaches out and sets user-logged in to store
        this.props.fetchUser()
    }
  render() {
    return (
        <React.Fragment>
                <BrowserRouter>
                    <div className={"main-cont"}>
                    <Header/>
                        <Switch>
                            <Route path={"/profile"} render={() => <Profile/>}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                            <Route path={"/register"} render={() => <Register/>}/>
                            <Route path={"/"} exact render={() => <Landing/>}/>
                        </Switch>
                    </div>
                </BrowserRouter>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
    return { user: state.user }
};
export default connect(mapStateToProps, actions)(App);


