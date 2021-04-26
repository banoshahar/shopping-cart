import React from 'react';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import { Switch, Route } from 'react-router-dom';
import Cart from "../Carts/carts.jsx";
import Products from "../Products/Products.jsx";


const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;