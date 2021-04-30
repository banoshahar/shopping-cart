import Main from './components/Main'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  store  from './redux/configureStore';


class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Main />
          </div>
        </Router>
      </Provider>


    );
  }

}

export default App;
