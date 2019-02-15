import React, {Component, Fragment} from 'react';
import './css/global.css';
import axios from 'axios';
import Landing from './Components/Landing';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { BrowserRouter} from 'react-router-dom';

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
        this.fetchTest();
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
      console.log(this.state);
    return (
        <React.Fragment>
                <BrowserRouter>
                    <div>
                        <Route path={"/profile"} render={() => <Landing/>}/>
                        <Route path={"/"}/><Landing/>
                        <button onClick={this.postAd.bind(this, "1", this.state.title, "harriest")}>Post Ad</button>
                    <input type="text" value={this.state.title} onChange={this.titleChangeHandler.bind(this)}/>
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
