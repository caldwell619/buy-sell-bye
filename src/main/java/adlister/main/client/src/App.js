import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import './css/global.css';
import axios from 'axios';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from "./Components/Register";

class App extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            desc: ""
        }
    }
    fetchTest = () => {
        this.props.fetchUser();
    };
    componentDidMount(){
        // authorize user here
        // this.fetchTest();
    }
    postAd = (user_id, title, desc) => {
        fetch("http://localhost:8080/api/listings/ad", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `user_id=${user_id}&title=${title}&description=${desc}`
        }).then((response) => console.log(response))
            .catch((response) => {console.log(response); debugger;})
    };
    axiosPostAd = () => {
        axios.post("http://localhost:8080/api/listings/ad", {
            "user_id": "1",
            "title": "Good stuff",
            "description": "All the great stuff"
        }).then(response => console.log(response))
            .catch(err => console.log(err))
    };
    axiosGetAd = () => {
        axios.get("/api/listings").then(res => console.log(res))
            .catch(err => console.log(err))
    };
    titleChangeHandler = event => {
        this.setState({
            title: event.target.value
        })
    };

  render() {
    return (
        <React.Fragment>
                <BrowserRouter>
                    <div className={"main-cont"}>
                        <Switch>
                            <Route path={"/profile/:type"} render={() => <Profile/>}/>
                            <Route path={"/login"} render={() => <Login/>}/>
                            <Route path={"/register"} render={() => <Register/>}/>
                            <Route path={"/"} exact/><Landing/>
                        </Switch>


                    </div>
                </BrowserRouter>


        </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
    console.log(state)
    return { user: state.user }
};
export default connect(mapStateToProps, actions)(App);



// {/*<button onClick={this.postAd.bind(this, "1", this.state.title, "harriest")}>Post Ad</button>*/}
{/*<input type="text" value={this.state.title} onChange={this.titleChangeHandler.bind(this)}/>*/}