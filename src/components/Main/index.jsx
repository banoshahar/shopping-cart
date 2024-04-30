import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Switch, Route , Redirect} from 'react-router-dom';
import Cart from "../Carts";
import Products from "../Products";
import Details from "../ProductDetails";


const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route path='/product/:id' component={Details} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;