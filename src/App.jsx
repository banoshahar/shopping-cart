import Main from './components/Main'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import  store  from './redux/configureStore';
import {MainStyle} from './app.style'


class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainStyle className="App">
            <Main />
          </MainStyle>
        </Router>
      </Provider>


    );
  }

}

export default App;
