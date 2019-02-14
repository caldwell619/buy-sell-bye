import React, { Component } from 'react';
import axios from 'axios';
import './css/global.css';
import Landing from './Components/Landing';

class App extends Component {
    fetchTest = () => {
        axios.get("/api/persons").then(result => console.log(result.data))
    };
  render() {
    return (
        <Landing/>
    )
  }
}

export default App;
