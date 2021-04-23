import './App.css';
import Main from './components/MainComponent.jsx'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import React, { Component } from 'react';
class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>

    );
  }

}

export default App;
