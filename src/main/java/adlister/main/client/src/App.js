import React, { Component } from 'react';
import axios from 'axios';
import './css/global.css';
import Landing from './Components/Landing';
import Profile from './Components/Profile';
import {Route} from 'react-router-dom';
class App extends Component {
    fetchTest = () => {
        axios.get("/api/persons").then(result => console.log(result.data))
    };
  render() {
    return (
        <React.Fragment>
            <Route path={'/'} exact render={()=> <Landing/>}/>
            <Route path={'/profile/:type'} render={()=> <Profile/>}/>
        </React.Fragment>
    )
  }
}

export default App;
