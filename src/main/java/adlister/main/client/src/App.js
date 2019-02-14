import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    fetchTest = () => {
        axios.get("/api/persons").then(result => console.log(result.data))
    };
  render() {
    return (
     <div>
       Hello
         {this.fetchTest()}
     </div>
    );
  }
}

export default App;
