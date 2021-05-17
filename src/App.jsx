import Main from './components/Main'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react';
import { Provider } from 'react-redux';
import  store  from './redux/configureStore';
import {MainStyle} from './app.style'


const App = () => {

    return (
      <Provider store={store}>
        <Router>
          <MainStyle>
            <Main />
          </MainStyle>
        </Router>
      </Provider>


    );
  }



export default App;
